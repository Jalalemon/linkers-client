import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContexts } from '../../auth/AuthProvider';
import useSeller from '../../Hoooks/useSeller';
import Loading from '../Bookings/Loading';

const SellerRoutes = ({children}) => {
     const { user, loading } = useContext(AuthContexts);
  const [isSeller, isAdminLoading] = useSeller(user?.email);

  const location = useLocation();
  if (loading || isAdminLoading) {
    return <Loading></Loading>;
  }
  if (user && isSeller) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};


export default SellerRoutes;