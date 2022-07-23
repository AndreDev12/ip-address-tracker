import { useRef, useState } from "react";
import { ReactComponent as IconArrow } from '../assets/icons/icon-arrow.svg';
import useFetch from "../hooks/useFetch";
import Error from "./Error";

// const Header = ({title, address, city, region, timezone, isp, handleChange, handleSubmit, error, form, errorMessage}) => {
const Header = ({title}) => {

    const {address, city, region, timezone, isp} = useFetch();
    // const [ipAddress, setIpAddress] = useState('');
    const [address, setAddress] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [error, setError] = useState(false);
    const form = useRef();

    const handleChange = ({target}) => {
        setIpAddress(target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        if(ipAddress.trim() === ''){
            setErrorMessage("Required IP address");
            setError(true);
            return;
        }
        setAddress();
        setError(false);
        form.current.reset();
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
                        // value={ipAddress}
                        value={address}
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
                        <p className="paragraph ip-address">{address}</p>
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