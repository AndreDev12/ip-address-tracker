import { useState } from 'react';

interface IEventTarget {
  target: INameValue;
}

interface INameValue {
  name: string;
  value: string;
}

const useForm = () => {
  const [form, setForm] = useState({
    ipAddress: '',
  });

  function handleChange({ target }: IEventTarget) {
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

  const { ipAddress } = form;

  return {
    ipAddress,
    handleChange,
    handleReset,
  };
};

export default useForm;
