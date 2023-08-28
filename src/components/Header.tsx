import SearchIcon from './SearchIcon';
import Error from './Error';
import useFetch from '../hooks/useFetch';
import useForm from '../hooks/useForm';

interface IHeader {
  title: string;
}

const Header = ({ title }: IHeader) =>
  //   {
  //   title,
  //   ipAddress,
  //   error,
  //   errorMessage,
  //   ipAddressLatest,
  //   city,
  //   region,
  //   timezone,
  //   isp,
  //   handleChange,
  //   handleSubmit,
  // }
  {
    const {
      ipAddressLatest,
      city,
      region,
      timezone,
      isp,
      lat,
      lng,
      errorMessage,
      error,
      setIpAddressLatest,
      setErrorMessage,
      setError,
    } = useFetch();

    const { ipAddress, handleChange, handleReset } = useForm();

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

    return (
      <header className="header">
        <div className="content container">
          <h1 className="title">{title}</h1>
          <form className="form" onSubmit={handleSubmit}>
            <input
              className="form-ip-address"
              type="text"
              placeholder="Search for any IP address"
              name="ipAddress"
              value={ipAddress}
              onChange={handleChange}
            />
            <button className="search" type="submit">
              <SearchIcon />
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
              <p className="paragraph location">
                {city}, {region}
              </p>
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
  };

export default Header;
