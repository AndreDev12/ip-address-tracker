import IpAddressProvider from './context/ipAddress/provider';
import Header from './components/Header';
import Map from './components/Map';
import './styles/styles.scss';

function App() {
  return (
    <IpAddressProvider>
      <Header title="IP Address Tracker" />
      <Map />
    </IpAddressProvider>
  );
}

export default App;
