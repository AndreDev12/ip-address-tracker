/* eslint-disable @typescript-eslint/no-floating-promises */
import { useEffect, useState } from 'react';

interface Props {
  lat: number;
  lng: number;
  city: string;
  region: string;
  timezone: string;
  isp: string;
}

const useGetMapInformation = () => {
  const [ipAddressLatest, setIpAddressLatest] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [hasError, setHasError] = useState<boolean>(false);
  const [information, setInformation] = useState<Props>({
    lat: 0,
    lng: 0,
    city: '',
    region: '',
    timezone: '',
    isp: '',
  });

  const { lat, lng, city, region, timezone, isp } = information;

  useEffect(() => {
    async function getData() {
      try {
        const apiKey = 'at_mcX1xQKQL4VDT18xKrPWYzIljEarR';
        const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ipAddressLatest}`;

        const response = await fetch(url);
        const result = await response.json();

        if (result.code === 403 || result.code === 422) {
          setErrorMessage(result.messages);
          setHasError(true);
          return;
        }
        const {
          ip,
          isp,
          location: { city, region, timezone, lat, lng },
        } = result;
        setInformation({
          lat,
          lng,
          city,
          region,
          timezone,
          isp,
        });
        setIpAddressLatest(ip);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [ipAddressLatest]);

  return {
    ipAddressLatest,
    errorMessage,
    hasError,
    lat,
    lng,
    city,
    region,
    timezone,
    isp,
    setIpAddressLatest,
    setErrorMessage,
    setHasError,
  };
};

export default useGetMapInformation;
