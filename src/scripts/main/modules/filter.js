function Filter(self) {
    this._self = self;
    this._popular = this._self.querySelector('.detailFilter__popular');
    this._filterButton = this._self.querySelector('.detailFilter__filterButton');
    this._filterDisplay = this._self.querySelector('.detailFilter__filterDisplay');
    this._filterDetail = this._self.querySelector('.filterDetail');
    this._filterRange = this._self.querySelector('.filterDetail__price');
    this._filterRangeInput = this._filterRange.querySelectorAll('.filterDetail__priceInput');
    this._filterRangeInputMin = this._filterRange.querySelector('.filterDetail__priceInput--min');
    this._filterRangeInputMax = this._filterRange.querySelector('.filterDetail__priceInput--max');
    this._filterCategory = this._self.querySelectorAll('.filterDetail__category');
    this._filterDetailLabel = this._self.querySelectorAll('.filterDetail__label');

    this.init();
}

Filter.prototype.init = function() {
    console.log('init');
    var self = this;

    this._filterButton.addEventListener('click', function() {
        this.classList.toggle('is-active');
        self._filterDetail.classList.toggle('is-active');
    });
    this._self.addEventListener('mouseleave', function() {
        self._filterButton.classList.remove('is-active');
        self._filterDetail.classList.remove('is-active');
    });


    for (var i = 0; i < this._filterCategory.length; i++) {
        var item = this._filterCategory[i];
        item.addEventListener('click', function(event) {
            self.changeCategory(this);

            if (event.target.classList.contains('filterDetail__categoryTitle--clear')) {
                event.target.remove();
                var inputs = this.querySelectorAll('input');

                for (var i = 0; i < inputs.length; i++) {
                    var item = inputs[i];
                    item.checked = false;
                }
            }
        });

        // Нумерация названий чекбоксов
        var itemIndex = item.getAttribute('data-index');
        var labelText = item.querySelectorAll('.filterDetail__labelText');

        for (var j = 0; j < labelText.length; j++) {
            var item = labelText[j];
            item.setAttribute('data-category', itemIndex);
            item.setAttribute('data-number', j);
        }
    }

    // Удаляем элемент из списка
    this._filterDisplay.addEventListener('click', function(event) {
        if (event.target.classList.contains('filterDetail__labelText')) {
            var thCategory = event.target.getAttribute('data-category');
            var thNumber = event.target.getAttribute('data-number');

            var triggerItem = self._filterDetail.querySelector('[data-category="' + thCategory + '"][data-number="' + thNumber + '"]').closest('.filterDetail__label').querySelector('input').checked = false;
            filterCategoryConst[thCategory].checkboxChange(triggerItem);
            event.target.remove();
        }
    });

    // Ввод только чисел
    for (var i = 0; i < this._filterRangeInput.length; i++) {
        var item = this._filterRangeInput[i];
        item.addEventListener('input', function(e) {
            this.value = this.value.replace(/[^\d,]/g, '');
            if (this.value != NaN) {
                parseInt(this.value.replace(/[^\d,]/g, ''), 10);
            }
            if (this.value.length > 8 && this.value != NaN) {
                this.value = this.value.slice(0, -1);
            }
        });
    }

    // Проверка на ввод числа в поле "от" не больше поля "до"
    this._filterRangeInputMin.addEventListener('focusout', function() {
        var thVal = this.value;
        var maxVal = self._filterRangeInputMax.value;
        if (thVal && maxVal && thVal > maxVal) {
            this.value = maxVal;
        }
    });

    // Проверка на ввод числа в поле "до" не больше поля "от"
    this._filterRangeInputMax.addEventListener('focusout', function() {
        var thVal = this.value;
        var minVal = self._filterRangeInputMin.value;
        if (thVal && minVal && thVal < minVal) {
            this.value = minVal;
        }
    });

}

// Добавляем в верхнюю строку фильтруемое свойство
Filter.prototype.addFilterItem = function(th) {
    var self = this;
    var selfItem = th.querySelector('.filterDetail__labelText');
    var selfCategory = selfItem.getAttribute('data-category');
    var selfNumber = selfItem.getAttribute('data-number');

    if (self._filterDisplay.querySelector('[data-category="' + selfCategory + '"][data-number="' + selfNumber + '"]')) {
        self._filterDisplay.querySelector('[data-category="' + selfCategory + '"][data-number="' + selfNumber + '"]').remove();
    }
    else {
        var clonedNode = selfItem.cloneNode(true);
        self._filterDisplay.appendChild(clonedNode);
    }

}

// Переключение категории
Filter.prototype.changeCategory = function(th) {
    for (var i = 0; i < this._filterCategory.length; i++) {
        var item = this._filterCategory[i];
        item.classList.remove('is-active');
    }
    th.classList.add('is-active');
}

function FilterCategory(self) {
    this._self = self;
    this._categoryTitle = this._self.querySelector('.filterDetail__categoryTitle');
    this._label = this._self.querySelectorAll('.filterDetail__label');

    this.init();
}

FilterCategory.prototype.init = function() {
    var self = this;

    for (var i = 0; i < this._label.length; i++) {
        var item = this._label[i];

        item.addEventListener('change', function() {
            self.checkboxChange();
            filterConst.addFilterItem(this);
        });
    }

}

// Клик по чекбоксу и установка креста на категорию
FilterCategory.prototype.checkboxChange = function(th) {
    var self = this;
    var check = false;

    for (var i = 0; i < this._label.length; i++) {
        var item = this._label[i];
        var checkbox = item.querySelector('input[type="checkbox"]');

        if (checkbox.checked) {
            check = true;
            break;
        }


    }
    if (check && !self._categoryTitle.querySelector('.filterDetail__categoryTitle--clear')) {
        var clear = document.createElement('span');
        clear.className = 'filterDetail__categoryTitle--clear';
        self._categoryTitle.appendChild(clear);
    }
    else if (!check && self._categoryTitle.querySelector('.filterDetail__categoryTitle--clear')) {
        self._categoryTitle.querySelector('.filterDetail__categoryTitle--clear').remove();
    }
}




var filter = document.querySelector('.detailFilter');
if (filter) {
    var filterConst = new Filter(filter);
}

var filterCategoryArr = document.querySelectorAll('.filterDetail__category');
var filterCategoryConst = [];
if (filterCategoryArr) {
    for (var i = 0; i < filterCategoryArr.length; i++) {
        var item = filterCategoryArr[i];
        var filterCategory = new FilterCategory(item);
        filterCategoryConst.push(filterCategory);
    }
}
