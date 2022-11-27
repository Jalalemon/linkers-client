import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContexts } from '../auth/AuthProvider';
import useAdmin from '../Hoooks/useAdmin';
import useBuyer from '../Hoooks/useBuyer';
import useSeller from '../Hoooks/useSeller';


import NavBar from '../Pages/shared/NavBar';


const DashboardLayout = () => {
    const { user } = useContext(AuthContexts);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);
    const [isBuyer] = useBuyer(user?.email);
    return (
      <div>
        <NavBar></NavBar>
        <div data-theme="" className="drawer drawer-mobile">
          <input
            id="dashboard-drawer"
            type="checkbox"
            className="drawer-toggle"
          />
          <div className="drawer-content">
            <Outlet></Outlet>
            <label
              htmlFor="dashboard-drawer"
              className="btn lg:hidden btn-primary drawer-button"
            >
              Open drawer
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="dashboard-drawer"
              className="drawer-overlay"
            ></label>
            <ul data-theme="light" className="menu p-4 w-80 text-base-content">
              {isSeller && (
                <>
                  <li>
                    <Link to="/dashboard/myproducts"> My products</Link>
                  </li>
                  <li>
                    <Link to="/dashboard/addproducts"> Add a products</Link>
                  </li>
                </>
              )}
              ,
              {
                <>
                  {isAdmin && (
                    <>
                      <li>
                        <Link to="/dashboard/allbuyers"> all buyers</Link>
                      </li>
                      <li>
                        <Link to="/dashboard/allsellers"> All sellers</Link>
                      </li>
                    </>
                  )}

                  {isBuyer && (
                    <li>
                      <Link to="/dashboard/myorders"> My orders</Link>
                    </li>
                  )}

                  <li>
                    <Link to="/dashboard/allusers"> all users</Link>
                  </li>
                </>
              }
            </ul>
          </div>
        </div>
      </div>
    );
};

export default DashboardLayout;