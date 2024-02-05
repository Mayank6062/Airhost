
mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
container: 'map',
center: coordinates, 
zoom: 9 
});

const marker = new mapboxgl.Marker({ color: 'black', rotation: 45 })
.setLngLat(coordinates) 
.addTo(map);

 