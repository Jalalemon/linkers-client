import React, { Children, useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContexts } from "../../auth/AuthProvider";
import useBuyer from "../../Hoooks/useBuyer";
import Loading from "../Bookings/Loading";

const BuyerRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContexts);
  const [isBuyer, isAdminLoading] = useBuyer(user?.email);

  const location = useLocation();
  if (loading || isAdminLoading) {
    return <Loading></Loading>;
  }
  if (user && isBuyer) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default BuyerRoutes;
