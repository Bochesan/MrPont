
    function ScrollFadeIn(self, classAnimate, obj, callBack) {
        this._self = self;
        this._classAnimate = classAnimate;
        this._obj = obj,
        this._callBack = callBack;
        this._scrollPoint;

        this.init();
    }

    ScrollFadeIn.prototype.init = function() {
        var self = this;

        function show() {
            var scrolled = this.pageYOffset;

            self._scrollPoint = parseInt(self._self.getBoundingClientRect().top);
            if (scrolled + window.innerHeight / 1.3 >= (self._scrollPoint + scrolled - 25)) {
                self.fadeIn();
            }
        }

        show();

        window.addEventListener("scroll", function(event) {
            show();
        });
        window.addEventListener("touchmove", function(event) {
            show();
        });

    }

    ScrollFadeIn.prototype.fadeIn = function() {
        if (typeof this._callBack === "function") {
            this._callBack.call(this._obj);
        } else {
            this._self.classList.add(this._classAnimate);
        }
    }

var fadeInElements = document.querySelectorAll(".fadeIn");
if (fadeInElements) {
    for(var i = 0; i < fadeInElements.length; i++) {
        new ScrollFadeIn(fadeInElements[i], "fadeIn--show");
    }
}
