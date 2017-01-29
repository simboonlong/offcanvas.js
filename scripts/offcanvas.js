
/*!
modal.js - http://simboonlong.com
Licensed under the MIT license

Copyright (c) 2017 Sim Boon Long

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var OffCanvas = (function() {

    // settings
    var ocAll = $('html, body, #oc-main, #oc-container');
    var ocMain = $('#oc-main');
    var ocOverlay = $('.oc-overlay');
    var ocContainer = $('#oc-container');
    var ocContent = $('#oc-content');
    var ocMenu = $('.oc-menu');
    var ocMenuLeft = $('.oc-menu[data-oc-menu-trigger="left"]');
    var ocMenuRight = $('.oc-menu[data-oc-menu-trigger="right"]');
    var ocSlide = $('.oc-slide');
    var ocMenuTrigger = $('.oc-menu-trigger');

    var deactivate = function() {
        ocMain.removeClass('is-active is-opened-left is-opened-right');
        ocMenu.removeClass('is-slide-left is-slide-right');
        ocSlide.removeClass('is-slide-left is-slide-right');
    };

    var activate = function() {

        var trigger = $(this).attr('data-oc-menu-trigger');

        if (!ocMain.hasClass('is-active')) {
            if ( trigger === 'left' ) {
                if ( ocMenuLeft.hasClass('oc-menu-overlap') ) {
                    ocSlide.not('#oc-container').not('.oc-overlay').not('.oc-menu-trigger').addClass('is-slide-left');
                } else {
                    ocSlide.addClass('is-slide-left');
                }
                ocMenuLeft.addClass('is-slide-left');
            } else {
                if ( ocMenuRight.hasClass('oc-menu-overlap') ) {
                    ocSlide.not('#oc-container').not('.oc-overlay').not('.oc-menu-trigger').addClass('is-slide-right');
                } else {
                    ocSlide.addClass('is-slide-right');
                }
                ocMenuRight.addClass('is-slide-right');
            }
            ocMain.addClass('is-active is-opened-'+trigger+'');
        }

    };


    var init = function() {

        ocMenuTrigger.on('click', activate );
        ocOverlay.on('click', deactivate );

    };

    return {
        init : init
    };

})();



OffCanvas.init();
