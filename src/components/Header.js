import Error from "./Error";

const Header = ({title, address, city, region, timezone, isp, handleChange, handleSubmit, error, form, errorMessage}) => {
    
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
                        onChange={handleChange}
                        placeholder="Search for any IP address"
                    />
                    <button 
                        className="search"
                        type="submit"
                    >
                        <svg
                            className="icon" 
                            xmlns="http://www.w3.org/2000/svg" width="11"
                            height="14"
                        >
                            <path
                                className="path"
                                fill="none"
                                stroke="#FFF"
                                strokeWidth="3"
                                d="M2 1l6 6-6 6"
                            />
                        </svg>
                    </button>
                </form>
                {error ? <Error message={errorMessage}/> : null}
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