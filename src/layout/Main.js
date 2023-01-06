import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';

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