interface IError {
  message: string;
}

const Error = ({ message }: IError) => {
  return <p className="error">{message}</p>;
};

export default Error;
