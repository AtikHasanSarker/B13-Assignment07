import React from 'react';
import Navbar from './Navbar';
import { Outlet, ScrollRestoration, useNavigation } from 'react-router';
import Footer from './Footer';
import { GridLoader } from 'react-spinners';

const Root = () => {
    const navigation = useNavigation();
    return (
      <div>
        <Navbar />
        {navigation.state === "loading" && (
          <div className="flex justify-center my-10">
            <GridLoader className="text-3xl" color="#004d39" />
          </div>
        )}
        <Outlet />
        <Footer />
        <ScrollRestoration />
      </div>
    );
};

export default Root;