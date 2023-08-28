import useFetch from './hooks/useFetch';
import useForm from './hooks/useForm';
import Header from './components/Header';
import Main from './components/Main';
import './styles/styles.scss';

function App() {
  const { lat, lng } = useFetch();
  // const { ipAddress, handleChange, handleReset } = useForm();
  // const {
  //   ipAddressLatest,
  //   city,
  //   region,
  //   timezone,
  //   isp,
  //   lat,
  //   lng,
  //   errorMessage,
  //   error,
  //   setIpAddressLatest,
  //   setErrorMessage,
  //   setError,
  // } = useFetch();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (ipAddress.trim() === '') {
  //     setErrorMessage('Required IP address');
  //     setError(true);
  //     return;
  //   }
  //   setIpAddressLatest(ipAddress);
  //   setError(false);
  //   handleReset();
  // };

  return (
    <>
      <Header
        title="IP Address Tracker"
        // ipAddress={ipAddress}
        // error={error}
        // errorMessage={errorMessage}
        // ipAddressLatest={ipAddressLatest}
        // city={city}
        // region={region}
        // timezone={timezone}
        // isp={isp}
        // handleChange={handleChange}
        // handleSubmit={handleSubmit}
        // handleSubmit={(e) => console.log(e.target.value)}
      />
      <Main lat={lat} lng={lng} />
    </>
  );
}

export default App;
