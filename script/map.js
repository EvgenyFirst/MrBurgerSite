/// Google Maps API 
/// Карта
function initMap() {
    var element = document.getElementById('map');
    var options = {
        zoom: 10,
        center: { lat: 59.860853, lng: 30.319865 }
    };
    var myMap = new google.maps.Map(element, options);
    /// Функция, которая создает макркеры на карте
    addMarker({ lat: 59.905264, lng: 30.502198 });
    addMarker({ lat: 59.914757, lng: 30.428197 });
    addMarker({ lat: 59.896942, lng: 30.294105 });
    addMarker({ lat: 59.836814, lng: 30.186028 });

    function addMarker(coordinates) {
        var marker = new google.maps.Marker({
            position: coordinates,
            map: myMap,
            icon: 'img/map-marker.png'
        });
    }
}