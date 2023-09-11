import React, { type Dispatch, type SetStateAction } from 'react';

export interface IpAddress {
  ipAddress: string;
  ipAddressLatest: string;
  hasError: boolean;
  errorMessage: string;
  setIpAddress: Dispatch<SetStateAction<string>>;
  setIpAddressLatest: Dispatch<SetStateAction<string>>;
  setHasError: Dispatch<SetStateAction<boolean>>;
  setErrorMessage: Dispatch<SetStateAction<string>>;
}

export interface Props {
  children: React.ReactNode;
}

export const defaultIpAddressValues = {
  ipAddress: '',
  ipAddressLatest: '',
  hasError: false,
  errorMessage: '',
};

export const defaultIpAddressSetter = {
  setIpAddress: () => {},
  setIpAddressLatest: () => {},
  setHasError: () => {},
  setErrorMessage: () => {},
};

export const defaultIpAddressContext = {
  ...defaultIpAddressValues,
  ...defaultIpAddressSetter,
};

export const IpAddressContext = React.createContext<IpAddress>({
  ...defaultIpAddressContext,
});
