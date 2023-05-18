import React from 'react';
import img from '../../assets/images/login.png'

const About = () => {
    return (
        <div className="hero my-20 ">
      <div className="hero-content flex-col lg:flex-row">
        <div className="relative w-1/2">
          <img
            src={img}
            alt=""
            className="w-4/5 h-full rounded-lg shadow-2xl"
          />
        </div>
        <div className="w-1/2">
          <p className=" text-2xl font-bold text-orange-600">About us</p>
          <h1 className=" my-5 text-5xl font-bold text-secondary">
          Our Glorious Story
          </h1>

          <p className="py-2">
          Dental Care is a well-known name in Dental and Oral Care in Bangladesh. The journey of this institution started in 1977 under the hands of Dr. Kazi Mehdi Ul Alam, Gold Medalist of Dhaka University. Dental Care has been leading the way in Dental Treatment in Bangladesh for more than 40 years in keeping with the evolution of time and the modernization of the era. 
         </p>
          <p className="py-2">
          With the passage of time, dentistry has expanded and there have been availability of specialist doctors in various departments. Currently in each department of this center like Dental Implants, Orthodontic Treatment, Cosmetic Dentistry, Oral & Maxillofacial Surgery, Root Canal, Crown, Bridges, Prosthesis, Filing, Periodontology, specialist doctors with degrees from home and abroad and highly trained in abroad provide treatment to patients in this center. We have long experience of serving domestic and foreign patients.
          </p>
          <button className="btn btn-primary">Get More Info</button>
        </div>
      </div>
    </div>
    );
};

export default About;
                                