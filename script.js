var mymap = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution:
    'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/satellite-streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'pk.eyJ1IjoiYm9qbzE5ODAiLCJhIjoiY2tmZTF1YTZ3MDBvejJ1cXZ5MnRsMmFlbyJ9.Oj8H9UBmf69qLHjmT2RlJw'
}).addTo(mymap);

var mark = L.marker([51.5, -0.09])
  .addTo(mymap)
  .bindPopup('This is 1');

var mark2 = L.marker([52.7, -0.09])
  .addTo(mymap)
  .bindPopup('This is 2');
