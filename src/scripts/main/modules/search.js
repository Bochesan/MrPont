function Search(self) {
    this._self = self;
    this._input = this._self.querySelector('input[type="text"]');
    this._submit = this._self.querySelector('input[type="submit"]');
    this._button = this._self.querySelector('.search__button');
    this._clear = this._self.querySelector('.search__clear');
    this._mobileButton = document.querySelector('.mobileSearchButton');

    this.init();
}

Search.prototype.init = function() {
    var self = this;

    this._button.addEventListener('click', function() {
        self._self.classList.add('is-opened');
    });

    this._clear.addEventListener('click', function() {
        self._self.classList.remove('is-opened');
        self._input.value = '';
    });

    this._mobileButton.addEventListener('click', function() {
        self._self.classList.add('is-opened');
    });

    this._self.addEventListener('submit', function(event) {
        if (!self._input.value) {
            event.preventDefault();
        }
    });
}

var search = new Search(document.querySelector('.search'));
