import { Fragment } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

import IconLocation from './IconLocation';

const Main = ({latitude, longitude}) => {

    if(latitude === 0 || longitude === 0) return null;
    return (
        <Fragment>
            <MapContainer 
                className="map" 
                center={[latitude, longitude]}
                zoom={18}
                zoomControl={false}
                key={longitude}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker 
                    position={[latitude, longitude]}
                    icon={IconLocation}
                >
                </Marker>
            </MapContainer>
        </Fragment>
    );
}
 
export default Main;