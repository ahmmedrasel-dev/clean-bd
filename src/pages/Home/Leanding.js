import React from 'react';
import bucketgirl from '../../assets/images/bucketgirl.png'
const Leanding = () => {
  return (
    <div className="hero h-screen lg:h-[70vh] bg-accent mt-20">
      <div className="hero-content flex-col lg:flex-row">
        <div>
          <h1 className="lg:text-xl text-lg font-bold pb-2">Best Quality</h1>
          <h1 className="lg:text-5xl text-4xl font-bold">Professional Cleaning Service</h1>
          <p className="py-4 max-w-xl">PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has.</p>
          <button className="btn btn-primary">Get Started</button>
        </div>

        <div className='h-[70vh] shrink-0 lg:pb-4 pb-20'>
          <img src={bucketgirl} className="h-full" alt='' />
        </div>
      </div>
    </div>
  );
};

export default Leanding;