(function( window, document, undefined ){
    'use strict';

    var HTML = $('html');
    var ocAll = $('html, body, #oc-main, #oc-container');
    var ocMain = $('#oc-main');
    var ocContainer = $('#oc-container');
    var ocContent = $('#oc-content');
    var ocMenu = $('#oc-menu');
    var isOcRight = ocMenu.hasClass('oc-menu-right');
    var isOcLeft = ocMenu.hasClass('oc-menu-left');
    var ocSlide = $('.oc-slide');
    var ocMenuTrigger = $('#oc-menu-trigger');

    function OffCanvas( options ){
        this.throttleThreshold = options.throttleThreshold;
        this.slideDuration = options.slideDuration;
        this.slideEase = options.slideEase;
        this.initialize();
    }

    OffCanvas.prototype.throttle = function(func, wait, options) {
        var context, args, result;
        var timeout = null;
        var previous = 0;
        if (!options) options = {};
        var later = function() {
            previous = options.leading === false ? 0 : Date.now();
            timeout = null;
            result = func.apply(context, args);
            if (!timeout) context = args = null;
        };
        return function() {
            var now = Date.now();
            if (!previous && options.leading === false) previous = now;
            var remaining = wait - (now - previous);
            context = this;
            args = arguments;
            if (remaining <= 0 || remaining > wait) {
                if (timeout) {
                    clearTimeout(timeout);
                    timeout = null;
                }
                previous = now;
                result = func.apply(context, args);
                if (!timeout) context = args = null;
            } else if (!timeout && options.trailing !== false) {
                timeout = setTimeout(later, remaining);
            }
            return result;
        };
    };

    OffCanvas.prototype.updatePosition = function() {
        if ( ocMain.hasClass('is-active') ) {
            if (isOcRight) {
                TweenMax.set( ocSlide, {x:-ocMenu.outerWidth()});
            } else {
                TweenMax.set( ocSlide, {x:ocMenu.outerWidth()});
            }
        }
    };

    OffCanvas.prototype.checkOcHeight = function() {
        if ( ocContent.outerHeight() < $(window).innerHeight() ) {
            TweenMax.set( ocAll, {height:'100%'}); // lengthen background height to hide insufficient content
        } else {
            TweenMax.set( ocAll, {height:'auto'});
        }
    };

    OffCanvas.prototype.slide = function() {
        this.checkOcHeight();
        if (!ocMain.hasClass('is-active')) {

            TweenMax.set( ocMenu, {display:'block'});
            if (isOcRight) {
                TweenMax.to( ocSlide, this.slideDuration, {x:-ocMenu.outerWidth(), ease:this.slideEase,
                    onComplete: function() {
                        TweenMax.set( ocMenu, {zIndex:1});
                    }
                });
            } else {
                TweenMax.to( ocSlide, this.slideDuration, {x:ocMenu.outerWidth(), ease:this.slideEase,
                    onComplete: function() {
                        TweenMax.set( ocMenu, {zIndex:1});
                    }
                });
            }
            ocMain.addClass('is-active');

        } else {

            TweenMax.set( ocMenu, {zIndex:0});
            TweenMax.to( ocSlide, this.slideDuration, {x:0, ease:this.slideEase,
                onComplete: function() {
                    TweenMax.set( ocMenu, {display:'none'});
                }
            });
            ocMain.removeClass('is-active');
        }
    };

    OffCanvas.prototype.initialize = function() {
        var throttled = this.throttle( this.updatePosition, this.throttleThreshold );
        $(window).on('resize', throttled );
        ocMenuTrigger.on('click', this.slide.bind(this));
    };

    var offcanvas = new OffCanvas({
        throttleThreshold : 50, // control window resize throttle, updates menu trigger's position
        slideDuration : 0.7, // sliding time (TweenMax)
        slideEase : 'Expo.easeOut' // sliding ease type (TweenMax)
    });

})( this, this.document );