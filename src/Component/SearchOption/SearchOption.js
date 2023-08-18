import React from 'react';

const SearchOption = () => {
    return (
        <div className='px-4 sm:px-8 lg:px-20 py-16 bg-[#FAFBFC] '>
            <p className='text-[#437EF7] text-center'>1% OF THE INDUSTRY</p>
            <h1 className='text-center text-3xl font-semibold mb-4 w-8/12 mx-auto'>Welcome to your new digital reality that will rock your world truly at all throughout.</h1>

            <div className="relative border border-[#444c5f] rounded-lg w-8/12 mx-auto my-8">
                <input type="text" placeholder="username@site.com" className="input input-bordered w-full bg-[transparent] pr-16" />
                <button className="btn btn-info border-0 bg-[#437EF7] absolute top-0 right-0 rounded-l-none text-white">Subscribe</button>
            </div>

        </div>
    );
};

export default SearchOption;