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
}

var productArr = document.querySelectorAll('.product');
for (var i = 0; i < productArr.length; i++) {
    var item = productArr[i];
    new DeleteProduct(item, 'product__delete');
}
/* Delete product */
