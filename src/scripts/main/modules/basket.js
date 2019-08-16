/* Delete product */
function DeleteProduct(self, buttonDelete) {
    this._self = self;
    this._buttonDelete = this._self.querySelector('.' + buttonDelete);

    this.init();
}

DeleteProduct.prototype.init = function() {
    var self = this;

    this._buttonDelete.addEventListener('click', function() {
        self.del();
    });
}

DeleteProduct.prototype.del = function() {
    var self = this;

    this._self.classList.add('deleteAnim');
    setTimeout(function() {
        self._self.remove();

    }, 750)

    /* Если продуктов в корзине не осталось создаем ссылку возврата */
    if (document.querySelectorAll('.product').length < 2) {
        var message = document.createElement('a');
        message.className = 'wrapper backToMain';
        message.innerHTML = 'Вернуться на главную';
        message.setAttribute('href', '/');
        document.querySelector('.products').insertBefore(message, document.querySelector('.products').firstChild);
    }
}

var productArr = document.querySelectorAll('.product');
for (var i = 0; i < productArr.length; i++) {
    var item = productArr[i];
    new DeleteProduct(item, 'product__delete');
}
/* Delete product */


/* Подсчет суммы заказа */
function SumValue(self, productArr, sumValue) {
    this._self = self;
    this._productArr = this._self.querySelectorAll('.' + productArr);
    this._sumValue = this._self.querySelector('.' + sumValue);
    this._orderPrice = document.querySelector('.orderPrice__price--value');
    this._selects = this._self.querySelectorAll('.product__select-value--number');
    this._delete = this._self.querySelectorAll('.product__delete');

    this._delivery = 0;

    this.init();
}

SumValue.prototype.init = function() {
    var self = this;

    this.sum();

    for (var i = 0; i < this._selects.length; i++) {
        var item = this._selects[i];
        item.addEventListener('change', function() {
            self.sum();
        });
    }

    for (var i = 0; i < this._delete.length; i++) {
        var item = this._delete[i];
        item.addEventListener('click', function() {
            self.sum();
        });
    }

}

SumValue.prototype.delivery = function(th) {
    if (th.value) {
        console.log('true');
    }
    else {
        console.log('false');
    }
}


SumValue.prototype.sum = function() {
    var self = this;
    var sumVal = 0;

    for (var i = 0; i < this._productArr.length; i++) {
        var item = this._productArr[i];
        if (!item.classList.contains('deleteAnim')) {
            var numVal = item.querySelector('.product__select-value--number').value;
            var priceVal = item.querySelector('.product__price--value').innerHTML.replace(/\s/g, '');
            sumVal += numVal * priceVal;
        }
    }
    this._sumValue.innerHTML = sumVal;
    this._orderPrice.innerHTML = sumVal + this._delivery;
}

if (document.querySelector('.products')) {
    var sumValue = new SumValue(document.querySelector('.products'), 'product', 'product__sum-value');
}
window.sumValue = sumValue;
