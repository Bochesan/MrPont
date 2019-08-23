console.log('map');
// var map
// myIcon;
//
//     DG.then(function () {
//         map = DG.map('map', {
//             center: [55.769225568981504,37.583373499999944],
//             zoom: 16
//         });
//
//         DG.marker([55.769225568981504,37.583373499999944], {
//                     icon: myIcon
//                 }).addTo(map).bindPopup('.  Mr.Pont  .');
//
//         myIcon = DG.icon({
//                     iconUrl: 'https://maps.api.2gis.ru/2.0/example_logo.png',
//                     iconSize: [48, 48]
//                 });
//     });

DG.then(function() {
    var map,
        myIcon;

    map = DG.map('map', {
        center: [55.769225568981504,37.583373499999944],
        zoom: 16
    });

    myIcon = DG.icon({
        iconUrl: '/dist/images/skull-ring.png',
        iconSize: [38, 38]
    });
    DG.marker([55.769225568981504,37.583373499999944], {
        icon: myIcon
    }).addTo(map).bindPopup('Mr.Pont');

});
