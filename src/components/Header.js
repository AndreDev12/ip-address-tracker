import { ReactComponent as IconArrow } from '../assets/icons/icon-arrow.svg';
import Error from './Error';

const Header = ({title, ipAddress, error, errorMessage, ipAddressLatest, city, region, timezone, isp, handleChange, handleSubmit}) => {

    return (
        <header className="header">
            <div className="content container">
                <h1 className="title">{title}</h1>
                <form 
                    className="form"
                    onSubmit={handleSubmit}
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
                        <p className="paragraph ip-address">{ipAddressLatest}</p>
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