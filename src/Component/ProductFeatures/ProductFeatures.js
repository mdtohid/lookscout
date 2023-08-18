import React from 'react';
import productFeatures1 from '../../image/productFeatures1.png';
import productFeatureIcon1 from '../../image/productFeatureIcon1.png';
import productFeatureIcon2 from '../../image/productFeatureIcon2.png';
import productFeatureIcon3 from '../../image/productFeatureIcon3.png';

const ProductFeatures = () => {
    return (
        <div className='px-4 sm:px-8 lg:px-20'>
            <h1 className='text-center text-3xl font-semibold mb-4'>Redefining Product Features</h1>
            <p className='text-center lg:w-7/12 mx-auto'>Keeping your eye on the ball while performing a deep dive on the start-up mentality to  derive convergence on cross-platform integration.</p>

            <div className='flex flex-col-reverse lg:flex-row gap-x-32 gap-y-12 lg:gap-y-0  justify-between px-8 py-16'>
                <div className='w-full lg:w-5/12'>
                    <div className='flex gap-x-4 mb-8'>
                        <img src={productFeatureIcon1} className='w-12 h-12' alt="" />
                        <div>
                            <h3 className='mb-3 text-lg font-semibold'>Explore ideas together</h3>
                            <p className='mt-3 mb-4 '>Engage audience segments and finally create actionable insights. Amplify vertical integration.</p>
                            <a className='flex gap-1.5 items-center text-[#437EF7]' href=""><span>Learn more</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                    <path d="M4.66669 10H15.5M11.3334 5L15.7441 9.41074C16.0695 9.73618 16.0695 10.2638 15.7441 10.5893L11.3334 15" stroke="#437EF7" stroke-width="1.67" stroke-linecap="round" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className='flex gap-x-4 mb-8'>
                        <img src={productFeatureIcon2} className='w-12 h-12' alt="" />
                        <div>
                            <h3 className='mb-3 text-lg font-semibold'>Bring those ideas to life</h3>
                            <p className='mt-3 mb-4 '>Engage audience segments and finally create actionable insights. Amplify vertical integration.</p>
                            <a className='flex gap-1.5 items-center text-[#437EF7]' href=""><span>Learn more</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                    <path d="M4.66669 10H15.5M11.3334 5L15.7441 9.41074C16.0695 9.73618 16.0695 10.2638 15.7441 10.5893L11.3334 15" stroke="#437EF7" stroke-width="1.67" stroke-linecap="round" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className='flex gap-x-4'>
                        <img src={productFeatureIcon3} className='w-12 h-12' alt="" />
                        <div>
                            <h3 className='mb-3 text-lg font-semibold'>Ship better outcomes</h3>
                            <p className='mt-3 mb-4 '>Engage audience segments and finally create actionable insights. Amplify vertical integration.</p>
                            <a className='flex gap-1.5 items-center text-[#437EF7]' href=""><span>Learn more</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                    <path d="M4.66669 10H15.5M11.3334 5L15.7441 9.41074C16.0695 9.73618 16.0695 10.2638 15.7441 10.5893L11.3334 15" stroke="#437EF7" stroke-width="1.67" stroke-linecap="round" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <img className='w-full' src={productFeatures1} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ProductFeatures;