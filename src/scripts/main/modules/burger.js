function NavMenu(self, burger, menu, subnav) {
    this._self = self;
    this._burger = this._self.querySelector('.' + burger);
    this._menu = this._self.querySelector('.' + menu);
    this._subnav = this._self.querySelector('.' + subnav);

    this.init();
}

NavMenu.prototype.init = function() {
    var self = this;

    this._burger.addEventListener('click', function() {
        if (this.classList.contains('opened')) {
            self.scroll(false);
            this.classList.remove('opened');
            self._subnav.classList.remove('hide');
            self.close();
        }
        else {
            self.scroll(true);
            this.classList.add('opened');
            self._subnav.classList.add('hide');
            self.open();
        }
    });
}

NavMenu.prototype.open = function() {
    var self = this;

    this._menu.classList.add('opened');
    this._self.classList.add('opened');
}

NavMenu.prototype.close = function() {
    var self = this;

    this._menu.classList.remove('opened');
    this._self.classList.remove('opened');
}

NavMenu.prototype.scroll = function(statusMenu) {
    var scroll = window.pageYOffset;
    if (statusMenu) {
        window.onscroll = function() {
            window.scrollTo(0, scroll);
        }
    }
    else {
        window.onscroll = function() {
            window.scrollTo();
        }
    }
}

new NavMenu(document.querySelector('header'), 'header__menu-button', 'header__nav', 'header__subnav');
