import { useEffect } from "react";

const useFetch = (address, setAddress, setLatitude, setLongitude, setCity, setRegion, setTimezone, setIsp, setErrorMessage, setError, setState) => {

  useEffect(() => {
    async function fetchData(){

      try {
        const apiKey = "at_sBg3CL1Vz1eG5WCrVElyomgsjbOlU";
        const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${address}`;
    
        const response = await fetch(url);
        const result = await response.json();
        
        if(result.code === 422){
          setErrorMessage(result.messages);
          setState('');
          setError(true);
          return;
        }
        if(result.code === 403){
          setErrorMessage(result.messages);
          setState('');
          setError(true);
          return;
        }
        setState('');
        setError(false);
        const {ip, isp, location:{city, region, timezone, lat, lng}} = result;
        setAddress(ip);
        setLatitude(lat);
        setLongitude(lng);
        setCity(city);
        setRegion(region);
        setTimezone(timezone);
        setIsp(isp); 
      } catch (error) {
        console.log(error)
      }    
    }
    fetchData();
  }, [address, setAddress, setCity, setIsp, setLatitude, setLongitude, setRegion, setTimezone, setError, setErrorMessage, setState]);
}

export default useFetch;