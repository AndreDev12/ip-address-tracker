/* eslint-disable @typescript-eslint/no-floating-promises */
import { useEffect, useState, useContext } from 'react';

import { IpAddressContext } from '../context/ipAddress';

interface Information {
  lat: number;
  lng: number;
  city: string;
  region: string;
  timezone: string;
  isp: string;
}

const useGetMapInformation = () => {
  const { ipAddressLatest, setIpAddressLatest, setHasError, setErrorMessage } =
    useContext(IpAddressContext);

  const [information, setInformation] = useState<Information>({
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
        const apiKey = 'at_iseeZUFaEh6EPRWadRiXpj7gxfAeT';
        const endPoint = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ipAddressLatest}`;

        const response = await fetch(endPoint);
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
        if (ipAddressLatest === '') {
          setIpAddressLatest(ip);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [ipAddressLatest]);

  return {
    lat,
    lng,
    city,
    region,
    timezone,
    isp,
  };
};

export default useGetMapInformation;
