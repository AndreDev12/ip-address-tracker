/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { useContext } from 'react';
import Skeleton from 'react-loading-skeleton';

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
            <h3 className="heading">
              {ipAddressLatest ? ipAddressHeading : <Skeleton />}
            </h3>
            <p className="paragraph ip-address">
              {ipAddressLatest || <Skeleton />}
            </p>
          </div>
          <div className="flex">
            <h3 className="heading">{city ? locationHeading : <Skeleton />}</h3>
            <p className="paragraph location">
              {city ? `${city}, ${rest.region}` : <Skeleton />}
            </p>
          </div>
          <div className="flex">
            <h3 className="heading">
              {rest.timezone ? timezoneHeading : <Skeleton />}
            </h3>
            <p className="paragraph timezone">
              {rest.timezone ? `UTC ${rest.timezone}` : <Skeleton />}
            </p>
          </div>
          <div className="flex">
            <h3 className="heading">{rest.isp ? ispHeading : <Skeleton />}</h3>
            <p className="paragraph isp">{rest.isp || <Skeleton />}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
