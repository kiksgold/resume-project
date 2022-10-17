function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 6.465422,
            lng: 3.406448
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    var locations = [
        { lat: 6.458985, lng: 3.601521 },
        { lat: 6.605874, lng: 3.349149 },
        { lat: 6.454812, lng: 3.434691 }
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer({ markers, map });
}