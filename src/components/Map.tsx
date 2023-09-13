/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

import useGetMapInformation from '../hooks/useGetMapInformation';
import SkeletonContainer from './SkeletonContainer';
import LocationIcon from './LocationIcon';

const Map = () => {
  const { lat, lng } = useGetMapInformation();

  return (
    <>
      {!lat ? (
        <SkeletonContainer />
      ) : (
        <MapContainer
          className="map"
          center={[lat, lng]}
          zoom={18}
          zoomControl
          key={lng}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[lat, lng]} icon={LocationIcon}></Marker>
        </MapContainer>
      )}
    </>
  );
};

export default Map;
