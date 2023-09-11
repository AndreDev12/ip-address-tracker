import { useState } from 'react';

import { defaultIpAddressValues, IpAddressContext } from './context';
import { type Props } from './context';

const IpAddressProvider = ({ children }: Props) => {
  const [ipAddress, setIpAddress] = useState<string>(
    defaultIpAddressValues.ipAddress,
  );
  const [ipAddressLatest, setIpAddressLatest] = useState<string>(
    defaultIpAddressValues.ipAddressLatest,
  );
  const [hasError, setHasError] = useState<boolean>(
    defaultIpAddressValues.hasError,
  );
  const [errorMessage, setErrorMessage] = useState<string>(
    defaultIpAddressValues.errorMessage,
  );

  return (
    <IpAddressContext.Provider
      value={{
        ipAddress,
        ipAddressLatest,
        hasError,
        errorMessage,
        setIpAddress,
        setIpAddressLatest,
        setHasError,
        setErrorMessage,
      }}
    >
      {children}
    </IpAddressContext.Provider>
  );
};

export default IpAddressProvider;
