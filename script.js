var myMap = L.map('mapid').setView([42.442, -108.46], 4);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution:
    'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/satellite-streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'pk.eyJ1IjoiYm9qbzE5ODAiLCJhIjoiY2tmZTF1YTZ3MDBvejJ1cXZ5MnRsMmFlbyJ9.Oj8H9UBmf69qLHjmT2RlJw'
}).addTo(myMap);

let m1 = {
  coordinates: [42.442, -108.468],
  name: 'John Smith',
  age: '32'
};

let m2 = {
  coordinates: [38.57, -96.71],
  name: 'Jane Dow',
  age: '12'
};

let allMarks = [m1, m2];

allMarks.forEach(element => {
  let mark = L.marker(element.coordinates)
    .addTo(myMap)
    .bindPopup(`${element.name} <br> Age: ${element.age}`);
});

/*
var mark = L.marker(m1.coordinates)
  .addTo(myMap)
  .bindPopup(m1.text);

var mark2 = L.marker(m2.coordinates)
  .addTo(myMap)
  .bindPopup(m2.text);
  */
