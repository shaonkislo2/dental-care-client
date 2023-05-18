import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../../assets/images/footer.png'

const Footer = () => {
    return (
        <footer style={{
            background:`url(${footer})`,
            backgroundSize: 'cover'
        }}  className=" p-10 ">
  <div className='footer '>
  <div>
    <span className="footer-title">Services</span> 
    <Link to="/" className="link link-hover">Emergency Checkup</Link>
    <Link to="/" className="link link-hover">Monthly Checkup</Link>
    <Link to="/" className="link link-hover">Weekly Checkup</Link>
    <Link to="/" className="link link-hover">Deep Checkup</Link>
  </div> 
  <div>
    <span className="footer-title">Oral Health</span> 
    <Link to="/" className="link link-hover">Fluoride Treatment</Link>
    <Link to="/" className="link link-hover">Cavity Filling</Link>
    <Link to="/" className="link link-hover">Teeth Whitening</Link>
  </div> 
  <div>
  <span className="footer-title">CONTACT INFO</span>
        <span>House#4, Road#4, Section#6, Block#A, Mirpur, Dhaka-1216.</span>
        <span>Phone: 88-02-9028800</span>
        <span>Email: info@thedentalcare.com.bd</span>
  </div>
  </div>
  <div className='text-center mt-32'>
    <p>Copyright © 2023 - All right reserved by Dental Care Ltd</p>
  </div>
</footer>
    );
};

export default Footer;
