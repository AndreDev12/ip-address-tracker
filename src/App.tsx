import useGetMapInformation from './hooks/useGetMapInformation';
import useForm from './hooks/useForm';
import Header from './components/Header';
import Map from './components/Map';
import './styles/styles.scss';

function App() {
  const { lat, lng } = useGetMapInformation();

  return (
    <>
      <Header title="IP Address Tracker" />
      <Map lat={lat} lng={lng} />
    </>
  );
}

export default App;
