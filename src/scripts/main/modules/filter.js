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
    this._filterDisplayClear = this._self.querySelector('.detailFilter__clear');

    this.init();
}

Filter.prototype.init = function() {
    var self = this;

    this._filterButton.addEventListener('click', function() {
        this.classList.toggle('is-active');
        self._filterDetail.classList.toggle('is-active');
    });
    this._self.addEventListener('mouseleave', function() {
        self._filterButton.classList.remove('is-active');
        self._filterDetail.classList.remove('is-active');
    });

    this._popular.addEventListener('click', function() {
        self.popularChange();
    });


    for (var i = 0; i < this._filterCategory.length; i++) {
        var item = this._filterCategory[i];
        item.addEventListener('click', function(event) {
            self.changeCategory(this);

            if (event.target.classList.contains('filterDetail__categoryTitle--clear') && this.classList.contains("filterDetail__category--checkbox")) {
                event.target.remove();
                var inputs = this.querySelectorAll('input');

                for (var i = 0; i < inputs.length; i++) {
                    var item = inputs[i];
                    var itemLabel = item.closest('.filterDetail__label');
                    var selfItem = itemLabel.querySelector('.filterDetail__labelText');
                    var selfCategory = selfItem.getAttribute('data-category');
                    var selfNumber = selfItem.getAttribute('data-number');

                    item.checked = false;

                    if (self._filterDisplay.querySelector('[data-category="' + selfCategory + '"][data-number="' + selfNumber + '"]')) {
                        self._filterDisplay.querySelector('[data-category="' + selfCategory + '"][data-number="' + selfNumber + '"]').remove();
                    }
                }

            }
            else if (event.target.classList.contains('filterDetail__categoryTitle--clear') && this.classList.contains("filterDetail__category--range")) {
                event.target.remove();
                var inputs = this.querySelectorAll('input');
                for (var i = 0; i < inputs.length; i++) {
                    var item = inputs[i];
                    item.value = '';
                }
                self._filterDisplay.querySelector('.rangeItem').remove();
            }
            self.valueDisplayFilter();
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
        if (event.target.classList.contains('rangeItem')) {
            self._self.querySelector('.filterDetail__category--range .filterDetail__categoryTitle--clear').remove();
            var inputs = self._self.querySelector('.filterDetail__category--range').querySelectorAll('input');
            for (var i = 0; i < inputs.length; i++) {
                var item = inputs[i];
                item.value = '';
            }
            event.target.remove();
        }
        self.valueDisplayFilter();
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
        self.valueDisplayFilter();
    }

    // Проверка на ввод числа в поле "от" не больше поля "до"
    this._filterRangeInputMin.addEventListener('focusout', function() {
        var thVal = this.value;
        var maxVal = self._filterRangeInputMax.value;
        if (thVal && maxVal && thVal > maxVal) {
            this.value = maxVal;
        }
        self.valueDisplayFilter();
    });

    // Проверка на ввод числа в поле "до" не больше поля "от"
    this._filterRangeInputMax.addEventListener('focusout', function() {
        var thVal = this.value;
        var minVal = self._filterRangeInputMin.value;
        if (thVal && minVal && thVal < minVal) {
            this.value = minVal;
        }
        self.valueDisplayFilter();
    });

// Установка/обновление/удаление rangeItem в поиск
    for (var i = 0; i < this._filterRangeInput.length; i++) {
        var item = this._filterRangeInput[i];

        item.addEventListener('focusout', function() {
            var category = this.closest('.filterDetail__category');
            if (self._filterRangeInputMin.value && self._filterRangeInputMax.value) {
                self.addRangeItem(category, self._filterRangeInputMin.value, self._filterRangeInputMax.value);
            }
            else {
                self.addRangeItem(category, 0, 0);
            }

            if (self._filterDisplay.querySelector('.rangeItem') && !item.closest('.filterDetail__category').querySelector('.filterDetail__categoryTitle--clear')) {
                var clear = document.createElement('span');
                clear.className = 'filterDetail__categoryTitle--clear';
                item.closest('.filterDetail__category').querySelector('.filterDetail__categoryTitle').appendChild(clear);
            }
            self.valueDisplayFilter();
        });
    }

    this._filterDisplayClear.addEventListener('click', function() {
        var items = self._filterDisplay.querySelectorAll('span');
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            item.click();
        }
    });

}

// Смена состояния сотировки по популярности
Filter.prototype.popularChange = function() {
    var self = this;
    var up = this._popular.querySelector('.detailFilter__popularUp');
    var down = this._popular.querySelector('.detailFilter__popularDown');

    if (up.checked == false && down.checked == false) {
        up.checked = true;
    }
    else if (up.checked == true && down.checked == false) {
        up.checked = false;
        down.checked = true;
    }
    else {
        up.checked = false;
        down.checked = false;
    }


}

// Установка/обновление/удаление rangeItem в поиск
Filter.prototype.addRangeItem = function(category, min, max) {
    var rangeItem = this._filterDisplay.querySelector('.rangeItem');
    if (rangeItem) {
        rangeItem.remove();
    }
    if (min && max) {
        var newRangeItem = document.createElement('span');
        newRangeItem.className = 'rangeItem';
        newRangeItem.innerHTML = min + ' — ' + max;
        this._filterDisplay.appendChild(newRangeItem);
        this._filterDisplay.classList.add('filtered');
    }
    else {
        if (category.querySelector('.filterDetail__categoryTitle--clear')) {
            category.querySelector('.filterDetail__categoryTitle--clear').remove();
        }
    }
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
        self._filterDisplay.classList.add('filtered');
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

Filter.prototype.valueDisplayFilter = function() {
    if (this._filterDisplay.innerHTML == '' && this._filterDisplay.classList.contains('filtered')) {
        this._filterDisplay.classList.remove('filtered');
    }
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
