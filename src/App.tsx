import { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import IpAddressProvider from './context/ipAddress/provider';
import Header from './components/Header';
import Map from './components/Map';
import './styles/styles.scss';

function App() {
  return (
    <IpAddressProvider>
      <SkeletonTheme width={'90%'} height={'20px'}>
        <Header title="IP Address Tracker" />
        <Map />
      </SkeletonTheme>
    </IpAddressProvider>
  );
}

export default App;
