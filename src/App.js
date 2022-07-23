import { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';

import './styles/styles.scss';

function App() {
  // const [address, setAddress] = useState('');
  // const [latitude, setLatitude] = useState(0);
  // const [longitude, setLongitude] = useState(0);
  // const [city, setCity] = useState('');
  // const [region, setRegion] = useState('');
  // const [timezone, setTimezone] = useState('');
  // const [isp, setIsp] = useState('');

  // const [state, setState] = useState('');
  // const [error, setError] = useState(false);
  // const [errorMessage, setErrorMessage] = useState('');

  // const form = useRef();

  // useFetch(address, setAddress, setLatitude, setLongitude, setCity, setRegion, setTimezone, setIsp, setErrorMessage, setError, setState);
  // const {address, latitude, longitude, city, region, timezone, isp} = useFetch();

  // const handleChange = e => {
  //     setState(e.target.value);
  // }

  // const handleSubmit = e => {
  //     e.preventDefault();
  //     if(state.trim() === ''){
  //         setErrorMessage("Required IP address");
  //         setError(true);
  //         return;
  //     }
  //     setError(false);
  //     // setAddress(state);
  //     form.current.reset();
  // }
  
  return (
    <>
      <Header
        title="IP Address Tracker" 
        // error={error}
        // errorMessage={errorMessage}
        // address={address}
        // city={city}
        // region={region}
        // timezone={timezone}
        // isp={isp}
        // handleChange={handleChange}
        // handleSubmit={handleSubmit}
        // form={form}
      />
      <Main
        // latitude={latitude}
        // longitude={longitude}
      />
    </>
  );
}

export default App;