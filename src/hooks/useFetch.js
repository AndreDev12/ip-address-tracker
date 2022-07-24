import { useEffect, useState } from "react";

const useFetch = () => {

  const [ipAddress, setIpAddress] = useState('');
  const [information, setInformation] = useState({
    latitude: 0,
    longitude: 0,
    city: '',
    region: '',
    timezone: '',
    isp: ''
  });

  const {latitude, longitude, city, region, timezone, isp} = information;

  useEffect(() => {
    async function fetchData(){

      try {
        const apiKey = "at_sBg3CL1Vz1eG5WCrVElyomgsjbOlU";
        const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ipAddress}`;
    
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
          latitude: lat,
          longitude: lng,
          city: city,
          region: region,
          timezone: timezone,
          isp: isp
        });
        setIpAddress(ip);
      } catch (error) {
        console.log(error)
      }    
    }
    fetchData();
  }, [ipAddress]);

  return {
    ipAddress,
    latitude,
    longitude,
    city,
    region,
    timezone,
    isp,
    setIpAddress
  }
}

export default useFetch;