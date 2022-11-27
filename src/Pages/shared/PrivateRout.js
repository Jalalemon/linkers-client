import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContexts } from "../../auth/AuthProvider";


const PrivateRout = ({ children }) => {
  const { user, loading } = useContext(AuthContexts);
  const location = useLocation();

  // loading

  if (loading) {
    return <button className="btn loading">loading...</button>;
  }

  // navigation

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRout;
