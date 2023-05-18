import React from 'react';
import chair from '../../../assets/images/chair.png'
import bgImg from '../../../assets/images/bg.png'

const Banner = () => {
    return (
        <div className=" hero bg-base-200 rounded-lg">
            <img src={bgImg} alt="" />
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} className=" rounded-lg lg:w-1/2 shadow-2xl" alt='' />
          <div>
            <h1 className="text-5xl font-bold ">We Create Beautiful Smiles!</h1>
            <p className="py-6">The Dental Care is a modern dental clinic, specialized in advanced diagnostics and treatment of dental and oral disorders. We offer comprehensive services from all fields of dentistry. In addition to high-end dental equipment, all services are provided in a comfortable, luxury environment.</p>
            
          </div>
        </div>
      </div>
    );
};

export default Banner;
