var detailFilter = document.querySelector('.detailFilter');
var filterButton = document.querySelector('.detailFilter__filter-button');
var filterDetail = document.querySelector('.filterDetail');
var filterCategory = document.querySelectorAll('.filterDetail__category-title');
var filterContainer = document.querySelectorAll('.filterDetail__detail');
var checkbox = document.querySelectorAll('.filterDetail__detail-title input[type="checkbox"]');
var filterPreview = document.querySelector('.detailFilter__filter-container');

if (detailFilter) {
    //Открывает фильтр
    filterButton.addEventListener('click', function() {
        filterDetail.classList.toggle('is-active');
    });
    detailFilter.addEventListener('mouseleave', function() {
        filterDetail.classList.remove('is-active');
    });

    // Клик по категории фильтра
    for (var i = 0; i < filterCategory.length; i++) {
        var item = filterCategory[i];

        item.addEventListener('click', function() {
            var self = this;

            for (var i = 0; i < filterCategory.length; i++) {
                filterCategory[i].classList.remove('is-active');
            }
            self.classList.add('is-active');

            for (var i = 0; i < filterContainer.length; i++) {
                var item = filterContainer[i];
                item.classList.remove('is-active');

                if (self.getAttribute('data-index') === item.getAttribute('data-index')) {
                    item.classList.add('is-active');
                }
            }

        })
    }


    // Клик по чекбоксу
    for (var i = 0; i < checkbox.length; i++) {
        var item = checkbox[i];

        item.addEventListener('change', function() {
            var thisContainer = this.closest('.filterDetail__detail');
            var thisContainerTitle;
            var thisContainerCheckbox = thisContainer.querySelectorAll('.filterDetail__detail-title input[type="checkbox"]');
            var check = false;

            for (var i = 0; i < filterCategory.length; i++) {
                var item = filterCategory[i];
                if (thisContainer.getAttribute('data-index') === item.getAttribute('data-index')) {
                    thisContainerTitle = item;
                }
            }

            for (var i = 0; i < thisContainerCheckbox.length; i++) {
                var item = thisContainerCheckbox[i];

                if (item.checked) {

                    check = true;
                    break;
                }
            }

            if (check && !thisContainerTitle.querySelector('.filterDetail__category-title--clear')) {
                var clear = document.createElement('span');
                clear.className = 'filterDetail__category-title--clear';
                // clear.innerText = 'X';
                thisContainerTitle.appendChild(clear);
            }
            else if (!check && thisContainerTitle.querySelector('.filterDetail__category-title--clear')) {
                thisContainerTitle.querySelector('.filterDetail__category-title--clear').remove();
            }
        });
    }


    //Клик по кресту категории фильтра
    for (var i = 0; i < filterCategory.length; i++) {
        var item = filterCategory[i];

        item.addEventListener('click', function(event) {
            var self = this;
            var thisContainer;
            var thisContainerCheckbox;
            if (event.target.classList.contains('filterDetail__category-title--clear')) {
                for (var i = 0; i < filterContainer.length; i++) {
                    var item = filterContainer[i];

                    if (self.getAttribute('data-index') === item.getAttribute('data-index')) {
                        thisContainer = item;
                        thisContainerCheckbox = thisContainer.querySelectorAll('.filterDetail__detail-title input[type="checkbox"]')
                    }
                }
                self.querySelector('.filterDetail__category-title--clear').remove();
                for (var i = 0; i < thisContainerCheckbox.length; i++) {
                    thisContainerCheckbox[i].checked = false;
                }
            }
        });
    }
}
