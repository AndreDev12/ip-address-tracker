import { Fragment, useState, useRef } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import useFetch from './hooks/useFetch';

import './styles/styles.scss';

function App() {
  const [address, setAddress] = useState('');
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [city, setCity] = useState('');
  const [region, setRegion] = useState('');
  const [timezone, setTimezone] = useState('');
  const [isp, setIsp] = useState('');
  const [state, setState] = useState('');
  const [error, setError] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState('');

  const form = useRef();

  useFetch(address, setAddress, setLatitude, setLongitude, setCity, setRegion, setTimezone, setIsp, setErrorMessage, setError, setState);

  const handleChange = e => {
      setState(e.target.value);
  }

  const handleSubmit = e => {
      e.preventDefault();
      if(state.trim() === ''){
          setErrorMessage("Required IP address");
          setError(true);
          return;
      }
      setError(false);
      setAddress(state);
      form.current.reset();
  }
  
  return (
    <Fragment>
      <Header
        title="IP Address Tracker" 
        address={address}
        city={city}
        region={region}
        timezone={timezone}
        isp={isp}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        error={error}
        form={form}
        errorMessage={ErrorMessage}
      />
      <Main
        latitude={latitude}
        longitude={longitude}
      />
    </Fragment>
  );
}

export default App;