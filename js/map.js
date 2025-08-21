const map = L.map("map", {
    minZoom: 3,
    maxZoom: 18,
    maxBounds: [
        [34.5, -25.0], // SW
        [72.0, 45.0]   // NE
    ]
}).setView([54, 15], 4);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors"
}).addTo(map);