import { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import useForm from './hooks/useForm';
import useFetch from './hooks/useFetch';

import './styles/styles.scss';

function App() {

  const {ipAddress, handleChange, handleReset} = useForm();
  const {ipAddressLatest, city, region, timezone, isp, lat, lng, setIpAddressLatest} = useFetch();
  const [errorMessage, setErrorMessage] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    if(ipAddress.trim() === ''){
      setErrorMessage("Required IP address");
      setError(true);
      return;
    }
    setIpAddressLatest(ipAddress);
    setError(false);
    handleReset();
  }

  return (
    <>
      <Header
        title="IP Address Tracker"
        ipAddress={ipAddress}
        error={error}
        errorMessage={errorMessage}
        ipAddressLatest={ipAddressLatest}
        city={city}
        region={region}
        timezone={timezone}
        isp={isp} 
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <Main 
        lat={lat}
        lng={lng}
      />
    </>
  );
}

export default App;