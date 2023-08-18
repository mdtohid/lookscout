import React from 'react';
import blogImg1 from '../../image/blogImg1.png';
import ceo from '../../image/ceo.png';

const Blog = () => {
    return (
        <div className='px-4 sm:px-8 lg:px-20'>
            <h1 className='text-center text-3xl font-semibold mb-4'>Latest Blog Posts</h1>
            <p className='text-center lg:w-7/12 mx-auto'>Completely synergize resource taxing relationships via premier niche markets. Professionally  cultivate one-to-one customer service with robust ideas.</p>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 py-16'>
                <div>
                    <img className='w-full' src={blogImg1} alt="" />
                    <h3 className='mt-5 mb-3 text-lg font-semibold'>Organize your digital assets with a new methodology here.</h3>
                    <p className='mt-3 mb-4 '>Podcasting operational management inside of workflows to establish a framework seamless.
                        Convergence collaboratively.</p>

                    <div className='flex items-center justify-between'>
                        <div className='flex gap-x-2.5 items-center'>
                            <div className="avatar">
                                <div className="w-10 h-10 rounded-full">
                                    <img src={ceo} alt='' />
                                </div>
                            </div>
                            <div className='text-start'>
                                <h6 className='font-semibold'>Lisa Smith</h6>
                                <p>CEO Company</p>
                            </div>
                        </div>
                        <p>25 Apr</p>
                    </div>
                </div>

                <div>
                    <img className='w-full' src={blogImg1} alt="" />
                    <h3 className='mt-5 mb-3 text-lg font-semibold'>Organize your digital assets with a new methodology here.</h3>
                    <p className='mt-3 mb-4 '>Podcasting operational management inside of workflows to establish a framework seamless.
                        Convergence collaboratively.</p>

                    <div className='flex items-center justify-between'>
                        <div className='flex gap-x-2.5 items-center'>
                            <div className="avatar">
                                <div className="w-10 h-10 rounded-full">
                                    <img src={ceo} alt='' />
                                </div>
                            </div>
                            <div className='text-start'>
                                <h6 className='font-semibold'>Lisa Smith</h6>
                                <p>CEO Company</p>
                            </div>
                        </div>
                        <p>25 Apr</p>
                    </div>
                </div>

                <div>
                    <img className='w-full' src={blogImg1} alt="" />
                    <h3 className='mt-5 mb-3 text-lg font-semibold'>Organize your digital assets with a new methodology here.</h3>
                    <p className='mt-3 mb-4 '>Podcasting operational management inside of workflows to establish a framework seamless.
                        Convergence collaboratively.</p>

                    <div className='flex items-center justify-between'>
                        <div className='flex gap-x-2.5 items-center'>
                            <div className="avatar">
                                <div className="w-10 h-10 rounded-full">
                                    <img src={ceo} alt='' />
                                </div>
                            </div>
                            <div className='text-start'>
                                <h6 className='font-semibold'>Lisa Smith</h6>
                                <p>CEO Company</p>
                            </div>
                        </div>
                        <p>25 Apr</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;