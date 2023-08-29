import { useState } from 'react';

import useFetch from './useGetMapInformation';

interface Form {
  ipAddress: string;
}

interface EventTarget {
  target: NameValue;
}

interface NameValue {
  name: string;
  value: string;
}

const useForm = () => {
  const { setErrorMessage, setError, setIpAddressLatest } = useFetch();

  const [form, setForm] = useState<Form>({
    ipAddress: '',
  });

  const { ipAddress } = form;

  function handleChange({ target }: EventTarget) {
    setForm({
      ...form,
      [target.name]: target.value,
    });
  }

  function handleReset() {
    setForm({
      ipAddress: '',
    });
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (ipAddress.trim() === '') {
      setErrorMessage('Required IP address');
      setError(true);
      return;
    }
    setIpAddressLatest(ipAddress);
    setError(false);
    handleReset();
  };

  return {
    ipAddress,
    handleChange,
    handleReset,
    handleSubmit,
  };
};

export default useForm;
