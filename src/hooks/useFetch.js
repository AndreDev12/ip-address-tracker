import { useEffect, useState } from "react";

// const useFetch = (address, setAddress, setLatitude, setLongitude, setCity, setRegion, setTimezone, setIsp, setErrorMessage, setError, setState) => {

const useFetch = () => {

  const [information, setInformation] = useState({
    address: '',
    latitude: 0,
    longitude: 0,
    city: '',
    region: '',
    timezone: '',
    isp: ''
  });

  const {address, latitude, longitude, city, region, timezone, isp} = information;

  useEffect(() => {
    async function fetchData(){

      try {
        const apiKey = "at_sBg3CL1Vz1eG5WCrVElyomgsjbOlU";
        const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${address}`;
    
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
          address: ip,
          latitude: lat,
          longitude: lng,
          city: city,
          region: region,
          timezone: timezone,
          isp: isp
        })
        // setAddress(ip);
        // setLatitude(lat);
        // setLongitude(lng);
        // setCity(city);
        // setRegion(region);
        // setTimezone(timezone);
        // setIsp(isp); 
      } catch (error) {
        console.log(error)
      }    
    }
    fetchData();
  // }, [address, setAddress, setCity, setIsp, setLatitude, setLongitude, setRegion, setTimezone, setError, setErrorMessage, setState]);
  }, [address]);

  return {
    address,
    latitude,
    longitude,
    city,
    region,
    timezone,
    isp
  }
}

export default useFetch;