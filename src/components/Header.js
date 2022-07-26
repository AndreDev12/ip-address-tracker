import { useRef, useState } from 'react';
import { ReactComponent as IconArrow } from '../assets/icons/icon-arrow.svg';
import useFetch from '../hooks/useFetch';
import useForm from '../hooks/useForm';
import Error from './Error';

const Header = ({title}) => {

    const {ipAddress, handleChange, handleReset} = useForm();
    const {ipAddress2, city, region, timezone, isp, setIpAddress} = useFetch();
    const [errorMessage, setErrorMessage] = useState('');
    const [error, setError] = useState(false);
    const form = useRef();

    const handleSubmit = e => {
        e.preventDefault();
        if(ipAddress.trim() === ''){
            setErrorMessage("Required IP address");
            setError(true);
            return;
        }
        setIpAddress(ipAddress);
        setError(false);
        handleReset();
        // form.current.reset();
        // setIpAddress('');
    }

    return (
        <header className="header">
            <div className="content container">
                <h1 className="title">{title}</h1>
                <form 
                    className="form"
                    onSubmit={handleSubmit}
                    ref={form}
                >
                    <input 
                        className="form-ip-address"
                        type="text"
                        placeholder="Search for any IP address"
                        name="ipAddress"
                        value={ipAddress}
                        onChange={handleChange}
                    />
                    <button 
                        className="search"
                        type="submit"
                    >
                        <IconArrow />
                    </button>
                </form>
                {error && <Error message={errorMessage} />}
            </div>
            <div className="information container">
                <div className="information-content">
                    <div className="flex">
                        <h3 className="heading">ip address</h3>
                        <p className="paragraph ip-address">{ipAddress2}</p>
                    </div>
                    <div className="flex">
                        <h3 className="heading">location</h3>
                        <p className="paragraph location">{city}, {region}</p>
                    </div>
                    <div className="flex">
                        <h3 className="heading">timezone</h3>
                        <p className="paragraph timezone">UTC {timezone}</p>
                    </div>
                    <div className="flex">
                        <h3 className="heading">isp</h3>
                        <p className="paragraph isp">{isp}</p>
                    </div>
                </div>
            </div>
        </header>
    );
}
 
export default Header;