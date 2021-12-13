/*Create Main Maps*/
// 1. Init BaseMap
var basemaps = {
    "OpenStreetMaps": L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        minZoom: 2,
        maxZoom: 19,
        id: "osm.streets"
      }
    ),
    "Google-Map": L.tileLayer(
      "https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}",
      {
        minZoom: 2,
        maxZoom: 19,
        id: "google.street"
      }
    ),
    "Google-Satellite": L.tileLayer(
      "https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
      {
        minZoom: 2,
        maxZoom: 19,
        id: "google.satellite"
      }
    ),
    "Google-Hybrid": L.tileLayer(
      "https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}",
      {
        minZoom: 2,
        maxZoom: 19,
        id: "google.hybrid"
      }
    ),
    "Six-Aerial": L.tileLayer(
      "http://maps.six.nsw.gov.au/arcgis/rest/services/public/NSW_Imagery/MapServer/tile/{z}/{y}/{x}",
      {
        minZoom:2,
        maxZoom:20,
        id:'six.aerial'
      }
    )
};

// 2. Render Main Map
var map = L.map("map", {
    center: [-2.4058653, 117.5021489],
    zoomControl: false,
    attributionControl: false,      
    zoom: 5,
    layers: [basemaps.OpenStreetMaps]
});
    
