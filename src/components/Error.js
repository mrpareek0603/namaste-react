import { useRouteError } from "react-router-dom";

const Error = () => {
  const errorObject = useRouteError();
  console.log(errorObject);
  return (
    <div>
      <h1>Oops</h1>
      <p>Something went wrong!</p>
      <p>
        {errorObject.status} : {errorObject.statusText}
      </p>
    </div>
  );
};
export default Error;
