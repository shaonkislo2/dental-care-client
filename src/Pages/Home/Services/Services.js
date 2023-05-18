import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {

    const servicesData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: "Fluoride is a natural mineral that builds strong teeth and prevents cavities. It's been an essential oral health treatment for decades. ",
            img: fluoride
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: "Fillings treat tooth decay, preventing further damage and tooth loss, as well as the possibility of pain and infection. A filling seals a hole, or cavity, in the tooth.",
            img: cavity
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: "Teeth whitening involves bleaching your teeth to make them lighter. It can't make your teeth brilliant white, but it can lighten the existing colour by several shades.",
            img: whitening
        }
    ]
    return (
        <div className='mt-16'>
            <div className='text-center'>
                <h3 className='text-xl font-bold text-primary uppercase'>Our Services</h3>
                <h2 className='text-3xl text-accent'>Services We Provide</h2>
            </div>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    servicesData.map(service => <Service
                    key={service.id}
                    service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;
