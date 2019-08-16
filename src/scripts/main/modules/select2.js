document.addEventListener('DOMContentLoaded', function() {
    var orderSelect = $('.order__input--select');
    if (orderSelect.length) {
        orderSelect.select2({
            minimumResultsForSearch: Infinity
        });

        orderSelect.on('change', function() {
            if (this.value == 1) {
                window.sumValue._delivery = 600;
            }
            else {
                window.sumValue._delivery = 0;
            }
            window.sumValue.sum();
        });
    }
})
