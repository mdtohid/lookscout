import React from 'react';
import heroImg from '../../image/heroBg.png';
import './Hero.css';

const Hero = () => {
    return (
        <div className='flex flex-col-reverse lg:flex-row text-white heroImgBg px-4 lg:px-0 lg:ps-20 items-center justify-between'>
            <div className='w-full lg:w-4/12'>
                <h1 className='text-5xl font-semibold'>
                    Your Supercharged Design Workflow.
                </h1>
                <p className='mt-5 mb-8'>
                    We’ve been told it is not possible to overachieve our customers’ expectations. We have not reinvented the wheel, we decided to build upon it.
                </p>
            </div>
            <div className='w-full lg:w-6/12 mb-8 lg:mb-0'>
                <img src={heroImg} className='w-full' alt="" />
            </div>
        </div>

    );
};

export default Hero;