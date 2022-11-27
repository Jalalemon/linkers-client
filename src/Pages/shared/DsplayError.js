import React, { useContext } from "react";
import { useRouteError } from "react-router-dom";
import { AuthContexts } from "../../auth/AuthProvider";


const DsplayError = () => {
  const {logOut } = useContext(AuthContexts);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  const error = useRouteError();
  return (
    <div className="text-center">
      <p className="text-red-500">something went wrong</p>
      <p className="text-red-500">{error.statusText || error.message}</p>
      <h3 className="text-3xl">
        please{" "}
        <button onClick={handleLogOut} className="btn btn-sm">
          logout
        </button>{" "}
      </h3>
    </div>
  );
};

export default DsplayError;
