import { useState } from 'react';

const useForm = () => {

    const [form, setForm] = useState({
        ipAddress: ''
    });

    function handleChange({target}){
        setForm({
            ...form,
            [target.name]: target.value
        })
    }

    function handleReset(){
        setForm(form)
    }

    const {ipAddress} = form; 

    return {
        ipAddress,
        handleChange,
        handleReset
    }
}

export default useForm;