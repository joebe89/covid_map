import { MapContainer, TileLayer, Marker } from 'react-leaflet';

import L from 'leaflet';

const iconPerson = new L.Icon({
	iconUrl: '/marker-icon.png',
	iconAnchor: [12, 35],
	// popupAnchor: [0, -35],
	// iconSize: [40, 40],
});

function Map({data}) {
	return (
		<MapContainer
			// id="map"
			center={[54.49812171248515, -3.6119078424951656]}
			zoom={5.75}
			zoomSnap={0.25}
			zoomDelta={0.25}
			scrollWheelZoom={true}
			style={{ width: '100%', height: '100%' }}
		>
			<TileLayer
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			    <Marker position={[51.45051786711392, -2.5946989288130617]} icon={iconPerson}></Marker>
				{data && data.map(marker => marker)}
		</MapContainer>
	);
}

export default Map;
