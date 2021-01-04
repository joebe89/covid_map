import { Marker } from 'react-leaflet';

import L from 'leaflet';

const icon = new L.Icon({
	iconUrl: '/marker-icon.png',
	iconAnchor: [12, 35],
	// popupAnchor: [0, -35],
	// iconSize: [40, 40],
});

function CustomMarker({coords}) {
    return <Marker position={coords} icon={icon}></Marker>
}

export default CustomMarker;