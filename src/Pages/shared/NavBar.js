import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContexts } from "../../auth/AuthProvider";

const NavBar = () => {

    const { user, logOut } = useContext(AuthContexts);
    const handleLogOut = () => {
      logOut()
        .then(() => {})
        .catch((error) => console.error(error));
    };
  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        {" "}
        {user?.uid ? (
          <>
            <Link to="/dashBoard">DashBoard</Link>
            <button onClick={handleLogOut}> logOut </button>
          </>
        ) : (
          <Link to="/login"> login</Link>
        )}
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar flex justify-between bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
              <li tabIndex={0}>
                <a className="justify-between">
                  Parent
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul className="p-2"></ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl"> Linkers.com</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            {menuItems}
            <li tabIndex={0}>
              <a>
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Get started</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
