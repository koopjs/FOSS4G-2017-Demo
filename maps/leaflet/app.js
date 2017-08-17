document.addEventListener('DOMContentLoaded', function (event) {

var mymap = L.map('mapid').setView([38.9072, -77.0369], 12);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
  maxZoom: 18,
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
    '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="http://mapbox.com">Mapbox</a>',
  id: 'mapbox.streets'
}).addTo(mymap);

fetch('https://k5b7tj7ac8.execute-api.us-east-1.amazonaws.com/latest/googlesheets/1Q6wN6qnvTaL7ZfJtSH0W6E23wtVfgXKemsGRE8bfHBc/houses!A1:AA/FeatureServer/0/query?f=geojson')
.then(r => { return r.json() } )
.then(geojson => {
  L.geoJSON(geojson)
  .addTo(mymap)
})


})
