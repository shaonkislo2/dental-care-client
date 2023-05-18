import React from 'react';
import treatment from '../../../assets/images/treatment.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import { Link } from 'react-router-dom';

const Treatment = () => {
    return (
        <div className="hero min-h-screen bg-base-200 mt-8 rounded-lg ">
  <div className="hero-content flex-col lg:flex-row">
    <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms </h1>
      <p className="py-6">We always try to provide the highest quality services to our patients and strive for continuous quality improvements.Expert surgical care from the team you know and trust. Implants, root canals, extractions and more. 
      Dental surgery is any of a number of medical procedures that involve artificially modifying dentition; in other words, surgery of the teeth, gums and jaw bones </p>
      {/* <button className="btn btn-primary">Get Started</button> */}
      
      <Link to="/appointment"><PrimaryButton>Appointment</PrimaryButton></Link>
    </div>
  </div>
</div>
    );
};

export default Treatment;