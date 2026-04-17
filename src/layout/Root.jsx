import React from 'react';
import Navbar from './Navbar';
import { Outlet, ScrollRestoration } from 'react-router';
import Footer from './Footer';
import { GridLoader } from 'react-spinners';

const Root = () => {
    return (
      <div>
        <Navbar />
        <Outlet />
        <Footer />
        <ScrollRestoration />
      </div>
    );
};

export default Root;