console.log(window);

var map = L.map("map").setView([53.39224146577022, -6.245791730975309], 15);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 25,
    attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// icons
var LeafIcon = L.Icon.extend({
    options: {
        shadowUrl: "leaf-shadow.png",
        iconSize: [38, 95],
        shadowSize: [50, 64],
        iconAnchor: [22, 94],
        shadowAnchor: [4, 62],
        popupAnchor: [-3, -76]
    }
});

let simpleIcon = new LeafIcon({
    iconUrl: "https://leafletjs.com/examples/custom-icons/leaf-red.png"
});

// markers
var marker = L.marker([53.39224146577022, -6.245791730975309]).addTo(map);
var marker2 = L.marker([53.395181383121894, -6.248795899694838], { icon: simpleIcon }).addTo(map);
