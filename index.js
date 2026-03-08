// console.log(window);

var map = L.map("map").setView([53.39224146577022, -6.245791730975309], 15);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 25,
    attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// icons
// var LeafIcon = L.Icon.extend({
//     options: {
//         shadowUrl: "leaf-shadow.png",
//         iconSize: [38, 95],
//         shadowSize: [50, 64],
//         iconAnchor: [22, 94],
//         shadowAnchor: [4, 62],
//         popupAnchor: [-3, -76]
//     }
// });

// let simpleIcon = new LeafIcon({
//     iconUrl: "https://leafletjs.com/examples/custom-icons/leaf-red.png"
// });

// markers
// var marker = L.marker([53.39224146577022, -6.245791730975309]).addTo(map);
// var marker2 = L.marker([53.395181383121894, -6.248795899694838], { icon: simpleIcon }).addTo(map);

// marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();


// var circle = L.circle([53.40065726069917, -6.248195034968101], {
//     color: 'red', 
//     fillColor: '#f03', 
//     fillOpacity: 0.5,
//     radius: 300
// }).addTo(map);

// var circle2 = L.circle([53.38663338392728, -6.250941616969721], {
//     color: 'green', 
//     fillColor: 'lightgreen', 
//     fillOpacity: 0.5,
//     radius: 300
// }).addTo(map);


// let polygonOne = L.polygon(
//    [
//        [53.410839638476524, -6.300380145912036],
//        [53.36599867800094, -6.220729264134061],
//        [53.37465317995567, -6.16021862657644],
//        [53.41631355102334, -6.174123198610958],

//    ],
//    {
//        color: 'gray'
//    }
// ).addTo(map);

// polygonOne.bindPopup("I am a polygon.");

// var popup = L.popup()
//     .setLatLng([51.513, -0.09])
//     .setContent("I am a standalone popup.")
//     .openOn(map); // this opens it by default


// function onMapClick(e){
//     console.log('e', e)
//     L.popup()
//     .setLatLng([e.latlng.lat, e.latlng.lng])
//     .setContent("I am a standalone popup.")
//     .openOn(map); // this opens it by default
// }

// map.on('click', onMapClick);

// const omniGeoJson = {
//     type: "FeatureCollection",
//     features: [
//         {
//             type: "Feature",
//             properties: {
//                 name: "Omni Shopping Centre"
//             },
//             geometry: {
//                 type: "Point",
//                 coordinates: [-6.24905339175749, 53.39241756337262]
//             }
//         }
//     ]
// };

// L.geoJSON(omniGeoJson).addTo(map);

const omniGeoJsonPolygon =  {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {
                "name": "Omni Marker"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-6.24905339175749, 53.39241756337262]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Omni Area",
                "description": "This is the area around the Omni Shopping Centre."
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [-6.2520, 53.3940],
                        [-6.2460, 53.3940],
                        [-6.2460, 53.3910],
                        [-6.2520, 53.3910],
                        [-6.2520, 53.3940]
                    ]
                ]
            }
        }
    ]
}

L.geoJSON(omniGeoJsonPolygon, {
    onEachFeature: (feature, layer) => {
        console.log('feature', feature);
        console.log('layer', layer);
        if (feature.properties) {
            layer.bindPopup(`
                <strong>${feature.properties.name}</strong><br/>
                ${feature.properties.description}
            `);
        }
    }
}).addTo(map);


// const omniGeoJsonSingle = {
//     type: "FeatureCollection",
//     features: [
//         {
//             type: "Feature",
//             properties: {
//                 name: "Omni Shopping Centre"
//             },
//             geometry: {
//                 type: "Point",
//                 coordinates: [-6.24905339175749, 53.39241756337262]
//             }
//         }
//     ]
// };

// L.geoJSON(omniGeoJsonSingle).addTo(map);