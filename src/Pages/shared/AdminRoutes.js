import React, { Children, useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContexts } from "../../auth/AuthProvider";
import useAdmin from "../../Hoooks/useAdmin";
import Loading from "../Components/Loading";



const AdminRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContexts);
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);

  const location = useLocation();
  if (loading || isAdminLoading) {
    return <Loading></Loading>;
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoutes;
