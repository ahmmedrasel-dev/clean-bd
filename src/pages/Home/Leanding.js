import React from 'react';
import bucketgirl from '../../assets/images/bucketgirl.png'
const Leanding = () => {
  return (
    <>
      <div className="hero h-screen lg:h-[60vh] bg-accent mt-16">
        <div className="hero-content flex-col lg:flex-row">
          <div>
            <h1 className="lg:text-xl text-lg font-bold pb-2">Best Quality</h1>
            <h1 className="lg:text-5xl text-4xl font-bold">Professional Cleaning Service</h1>
            <p className="py-4 max-w-xl">PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>

          <div className='h-[60vh] shrink-0 lg:pb-4 pb-20'>
            <img src={bucketgirl} className="h-full" alt='' />
          </div>
        </div>
      </div>

      <div className='shadow-lg mx-auto p-8 w-5/6 rounded-2xl mt-[-40px] bg-base-200 z-50 relative'>
        <h1 className='text-2xl mb-3 text-primary'>Get Free Estimate</h1>
        <div className='grid lg:grid-cols-4 mg:grid-cols-2 grid-cols-1 gap-2'>
          <input type="text" placeholder="Type here" className="input input-bordered w-full" />
          <input type="text" placeholder="Type here" className="input input-bordered w-full" />
          <input type="text" placeholder="Type here" className="input input-bordered w-full" />
          <input type="text" placeholder="Type here" className="input input-bordered w-full" />
          <input type="text" placeholder="Type here" className="input input-bordered w-full" />
          <input type="text" placeholder="Type here" className="input input-bordered w-full" />
          <input type="text" placeholder="Type here" className="input input-bordered w-full" />
          <input type="text" placeholder="Type here" className="input input-bordered w-full" />
        </div>
        <button className='btn btn-primary mt-3'>REQUEST A QOUTE</button>
      </div>
    </>
  );
};

export default Leanding;