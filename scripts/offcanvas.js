/*!
offcanvas.js - http://simboonlong.com
Licensed under the MIT license

Copyright (c) 2017 Sim Boon Long

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var OffCanvas = (function() {

    // settings
    var settings = {};

    var deactivate = function() {
        settings.ocMain.removeClass('is-active is-opened-left is-opened-right');
        settings.ocMenu.removeClass('is-slide-left is-slide-right');
        settings.ocSlide.removeClass('is-slide-left is-slide-right');
    };

    var activate = function() {

        var trigger = $(this).attr('data-oc-menu-trigger');

        if (!settings.ocMain.hasClass('is-active')) {

            if ( trigger === 'left' ) {

                if ( settings.ocMenuLeft.hasClass('oc-menu-overlap') ) {

                    settings.ocSlide.not('#oc-container').not('.oc-overlay').not('.oc-menu-trigger').addClass('is-slide-left');

                } else {

                    settings.ocSlide.addClass('is-slide-left');

                }

                settings.ocMenuLeft.addClass('is-slide-left');

            } else {

                if ( settings.ocMenuRight.hasClass('oc-menu-overlap') ) {

                    settings.ocSlide.not('#oc-container').not('.oc-overlay').not('.oc-menu-trigger').addClass('is-slide-right');

                } else {

                    settings.ocSlide.addClass('is-slide-right');

                }

                settings.ocMenuRight.addClass('is-slide-right');

            }

            settings.ocMain.addClass('is-active is-opened-' + trigger + '');

        }

    };

    var init = function() {

        // dom selectors
        settings.ocAll = $('html, body, #oc-main, #oc-container');
        settings.ocMain = $('#oc-main');
        settings.ocOverlay = $('.oc-overlay');
        settings.ocContainer = $('#oc-container');
        settings.ocContent = $('#oc-content');
        settings.ocMenu = $('.oc-menu');
        settings.ocMenuLeft = $('.oc-menu[data-oc-menu-trigger="left"]');
        settings.ocMenuRight = $('.oc-menu[data-oc-menu-trigger="right"]');
        settings.ocSlide = $('.oc-slide');
        settings.ocMenuTrigger = $('.oc-menu-trigger');

        // bind events
        settings.ocMenuTrigger.on('click', activate );
        settings.ocOverlay.on('click', deactivate );

    };

    return {
        init : init,
        settings : settings
    };

})();

