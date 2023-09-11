import { useContext } from 'react';

import {
  ipAddressHeading,
  locationHeading,
  timezoneHeading,
  ispHeading,
} from '../constants';
import useGetMapInformation from '../hooks/useGetMapInformation';
import { IpAddressContext } from '../context/ipAddress';
import SearchIcon from './SearchIcon';
import useForm from '../hooks/useForm';
import Error from './Error';

interface Props {
  title: string;
}

const Header = ({ title }: Props) => {
  const { ipAddressLatest, ipAddress, hasError, errorMessage } =
    useContext(IpAddressContext);

  const { handleSubmit, handleChange } = useForm();
  const { city, ...rest } = useGetMapInformation();

  return (
    <header className="header">
      <div className="content container">
        <h1 className="title">{title}</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            className="form-ip-address"
            type="text"
            placeholder="Example: 162.254.206.227"
            name="ipAddress"
            value={ipAddress}
            onChange={handleChange}
          />
          <button className="search" type="submit">
            <SearchIcon />
          </button>
        </form>
        {hasError && <Error message={errorMessage} />}
      </div>
      <div className="information container">
        <div className="information-content">
          <div className="flex">
            <h3 className="heading">{ipAddressHeading}</h3>
            <p className="paragraph ip-address">{ipAddressLatest}</p>
          </div>
          <div className="flex">
            <h3 className="heading">{locationHeading}</h3>
            <p className="paragraph location">{`${city}, ${rest.region}`}</p>
          </div>
          <div className="flex">
            <h3 className="heading">{timezoneHeading}</h3>
            <p className="paragraph timezone">UTC {rest.timezone}</p>
          </div>
          <div className="flex">
            <h3 className="heading">{ispHeading}</h3>
            <p className="paragraph isp">{rest.isp}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
