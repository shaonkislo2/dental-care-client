import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Review from './Review';

const Testimonial = () => {

    const reviews = [
        {
            _id: 1,
            name: 'Will Smith',
            img: people1,
            userReview: "Always a good experience. You're well looked-after and everyone is professional and well-informed. The dentists give good, practical advice and I never feel like I'm pushed to purchase additional treatments, unless I need them.",
            location: 'Los Angeles'
        },
        {
            _id: 2,
            name: 'Ariana Grande',
            img: people2,
            userReview: "Excellent doctor!!!Very thorough and caring. I'm terribly afraid of the dentist and she's very sensitive to that and goes the extra mile to make you feel comfortable. Love her!",
            location: 'California'
        },
        {
            _id: 3,
            name: 'Selena Gomez',
            img: people3,
            userReview: "I've been with Teeth and Smiles for around 5 years since I became a Chelsea Pensioner. Their service has been excellent every time I visit. My latest visit was for my annual check up and I was given advice during this check up to help me look after my teeth.",
            location: 'New York'
        },
    ]
    return (
        <section className='my-16'>
            <div className='flex justify-between '>
                <div >
                    <h4 className='text-xl text-primary font-bold'>Testimonial</h4>
                    <h2 className='text-4xl'>What Our Patients Says</h2>
                </div>
                <figure className='w-24 lg:w-48'>
                    <img src={quote} alt="" />
                </figure>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(review => <Review
                    key={review._id}
                    review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;
