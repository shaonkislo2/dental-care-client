import React from 'react';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';

const Contact = () => {
    return (
        
        <div>
            <h3 className='text-center font-bold text-violet-700'>Contact us</h3>
            <h2 className='text-center text-3xl text-primary font-bold'>Stay connected with us</h2>
        <form>
          <textarea
            name="message"
            className=" mt-4 textarea textarea-bordered h-24 w-full"
            placeholder="Your Message"
            required
          ></textarea>
          <br />
          <div className="grid grid-cols-1 lg:grid-cols-2  gap-4">
            <input
              type="text"
              name="yourName"
              placeholder="Your Name"
              className="input input-ghost w-50 input-bordered"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="input input-ghost w-50 input-bordered mb-4"
              required
            />
          </div>
          <PrimaryButton >Submit </PrimaryButton>
        </form>
      </div>
    );
};

export default Contact;

