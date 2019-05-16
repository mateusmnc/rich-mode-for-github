// ==UserScript==
// @name         Always rich diff
// @namespace    https://github.com/mateusmnc
// @version      0.5
// @description  Always displays rich diff when dealing with backlogs or features .md files
// @author       Mateus Manica
// @match        <<enter your url here>>
// @grant        GM_addStyle
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// ==/UserScript==

(function() {
    'use strict';

    var $ = window.jQuery;
    waitForKeyElements(".diffbar-item", changeToRichMode);

    function changeToRichMode() {
        var buttonShowRich = $(".rendered").filter(":button");
        buttonShowRich.parents("form:first").on('submit', event => event.preventDefault());
        buttonShowRich.click();

        const interval = setInterval(() => {
            // Either button is selected (the last one to be clicked on) or rich diff container is being rendered
            if (buttonShowRich.hasClass('selected')) {
                clearInterval(interval);
            } else {
                buttonShowRich.click();
            }
        }, 300);
    }
})();