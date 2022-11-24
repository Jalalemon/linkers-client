import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/shared/Footer';
import NavBar from '../Pages/shared/NavBar';

const Main = () => {
    return (
        <div>
          <NavBar></NavBar>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
    );
};

export default Main;