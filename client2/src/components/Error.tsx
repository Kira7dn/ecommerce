import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";

type Props = {
  error: FetchBaseQueryError | SerializedError;
};
const Error = ({ error }: Props) => {
  if ("status" in error) {
    const errMsg = "error" in error ? error.error : JSON.stringify(error.data);
    return (
      <div>
        <div>An error has occurred:</div>
        <div>{errMsg}</div>
      </div>
    );
  } else {
    return <div>{error.message}</div>;
  }
};
export default Error;
