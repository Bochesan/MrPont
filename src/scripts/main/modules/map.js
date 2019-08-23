console.log('map');
var map;

    DG.then(function () {
        map = DG.map('map', {
            center: [55.769225568981504,37.583373499999944],
            zoom: 16
        });

        DG.marker([55.769225568981504,37.583373499999944]).addTo(map);
    });
