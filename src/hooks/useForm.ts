import { useContext } from 'react';

import { IpAddressContext } from '../context/ipAddress';

const useForm = () => {
  const {
    ipAddress,
    setIpAddress,
    setIpAddressLatest,
    setHasError,
    setErrorMessage,
  } = useContext(IpAddressContext);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setIpAddress(e.target.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (ipAddress.trim() === '') {
      setHasError(true);
      setErrorMessage('Required IP address');
      return;
    }
    setHasError(false);
    setErrorMessage('');
    setIpAddressLatest(ipAddress);
    setIpAddress('');
  }

  return {
    handleChange,
    handleSubmit,
  };
};

export default useForm;
