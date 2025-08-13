// styles
Object.assign(document.getElementById('map').style, {
    height: '80vh',
    width: '80vw',
    border: '1px solid black'
});

// JS
let map = L.map('map').setView([53.384995307508255, -6.233518037178154], 13);

// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 22, // this is MAXIMUM
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);

L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.{ext}', {
	minZoom: 0,
	maxZoom: 20,
	attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    ext: 'png'
}).addTo(map);

// items

var LeafIcon = L.Icon.extend({
    options: {
        shadowUrl: 'leaf-shadow.png',
        iconSize: [38, 95],
        shadowSize: [50, 64],
        iconAnchor: [22, 94],
        shadowAnchor: [4, 62],
        popupAnchor: [-3, -76]
    }
});

let simpleIcon = new LeafIcon({ iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-red.png' });

let marker = L.marker([53.39523256327653, -6.27797833541198], { icon: simpleIcon }).addTo(map);
let marker2 = L.marker([53.39835443632381, -6.200473220923284]).addTo(map);

var circle = L.circle([53.37956856368106, -6.240470323195412], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

var circle2 = L.circle([53.383664283417644, -6.193778426980738], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

let polygonOne = L.polygon(
    [
        [53.410839638476524, -6.300380145912036],
        [53.36599867800094, -6.220729264134061],
        [53.37465317995567, -6.16021862657644],
        [53.41631355102334, -6.174123198610958]
    ],
    {
        color: 'gray'
    }
).addTo(map);

// popups
marker.bindPopup('Hello world!').openPopup();
marker2.bindPopup("<b style='color: red'>Hello world!</b><br>I am a popup. 2");

// var popup = L.popup()
//     .setLatLng([53.38740128392231, -6.225106629404187])
//     .setContent("I am a standalone popup.")
//     .openOn(map);


// events
map.on('click', function (e) {
    console.log(e);

    var popup = L.popup()
    .setLatLng([e.latlng.lat, e.latlng.lng])
    .setContent("I am a standalone popup with lat.")
    .openOn(map);
});