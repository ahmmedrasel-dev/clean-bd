import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import Home from '../pages/Home/Home';

const Main = () => {
  return (
    <>
      <Navbar>

        <Outlet></Outlet>
      </Navbar>
    </>
  );
};

export default Main;