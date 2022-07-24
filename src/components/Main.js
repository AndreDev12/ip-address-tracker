import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import useFetch from '../hooks/useFetch';
import IconLocation from './IconLocation';

const Main = () => {

    const {latitude, longitude} = useFetch();

    if(latitude === 0 || longitude === 0) return null;
    return (
        <>
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
        </>
    );
}
 
export default Main;