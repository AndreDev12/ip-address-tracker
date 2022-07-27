import { useEffect, useState } from 'react';

const useFetch = () => {

  const [ipAddressLatest, setIpAddressLatest] = useState('');
  const [information, setInformation] = useState({
    lat: 0,
    lng: 0,
    city: '',
    region: '',
    timezone: '',
    isp: ''
  });

  const {lat, lng, city, region, timezone, isp} = information;

  useEffect(() => {
    async function fetchData(){

      try {
        const apiKey = "at_CKHAU3ija26s5KFZxMeZDfDcpFafI";
        const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ipAddressLatest}`;
    
        const response = await fetch(url);
        const result = await response.json();
        
        if(result.code === 422 || result.code === 403){
          // setErrorMessage(result.messages);
          // setState('');
          // setError(true);
          return;
        }
        // setState('');
        // setError(false);
        const {ip, isp, location:{city, region, timezone, lat, lng}} = result;
        setInformation({
          lat,
          lng,
          city,
          region,
          timezone,
          isp
        });
        setIpAddressLatest(ip);
      } catch (error) {
        console.log(error)
      }    
    }
    fetchData();
  }, [ipAddressLatest]);

  return {
    ipAddressLatest,
    lat,
    lng,
    city,
    region,
    timezone,
    isp,
    setIpAddressLatest
  }
}

export default useFetch;