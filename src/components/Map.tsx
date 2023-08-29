import { MapContainer, TileLayer, Marker } from 'react-leaflet';

import IconLocation from './IconLocation';

interface Props {
  lat: number;
  lng: number;
}

const Map = ({ lat, lng }: Props) => {
  return (
    <>
      {!(lat === 0 && lng === 0) && (
        <MapContainer
          className="map"
          center={[lat, lng]}
          zoom={18}
          zoomControl={false}
          key={lng}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[lat, lng]} icon={IconLocation}></Marker>
        </MapContainer>
      )}
    </>
  );
};

export default Map;
