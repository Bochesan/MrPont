function MoreInfo(self, button, content) {
    this._self = self;
    this._button = this._self.querySelector('.' + button);
    this._content = this._self.querySelector('.' + content);

    this.init();
}

MoreInfo.prototype.init = function() {
    var self = this;
    this._content.style.display = 'none';
    this._button.addEventListener('click', function() {
        self.contentToggle();
    });
}
MoreInfo.prototype.contentToggle = function() {
    console.log('ff');
    if (this._content.style.display == 'none') {
        this._content.style.display = 'block';
        console.log('nene');
    }
    else {
        this._content.style.display = 'none';
        console.log('dade');
    }
}

var moreInfoArr = document.querySelectorAll('.more-info');
if (moreInfoArr) {
    for (var i = 0; i < moreInfoArr.length; i++) {
        var elem = moreInfoArr[i];
        new MoreInfo(elem, 'more-info__title', 'more-info__container');
    }
}
