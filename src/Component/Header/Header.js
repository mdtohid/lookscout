import React from 'react';
import companyLogo from '../../image/companyLogo.png';
import './Header.css';

const Header = () => {
    const menuItem =
        <>
            <li><a className='bg-transparent hover:bg-[#437EF7] hover:text-white border-0  px-5'>Home</a></li>
            <li tabIndex={0}>
                <details>
                    <summary className='bg-transparent hover:bg-[#437EF7] hover:text-white border-0  px-5'>Our Products</summary>
                    <ul className="p-2 text-black">
                        <li><a>Submenu 1</a></li>
                        <li><a>Submenu 2</a></li>
                    </ul>
                </details>
            </li>
            <li><a className='bg-transparent hover:bg-[#437EF7] hover:text-white border-0  px-5'>Resources</a></li>
            <li><a className='bg-transparent hover:bg-[#437EF7] hover:text-white border-0  px-5'>Contacts</a></li>
        </>

    return (
        <div className="navbar navbarBg px-4 lg:px-20 text-white justify-between">
            <div className="">
                <a className=" normal-case text-xl">
                    <img src={companyLogo} alt="" />
                </a>
            </div>

            <div className="hidden lg:flex ms-16 w-full justify-between">
                <ul className="menu menu-horizontal px-1 text-white">
                    {menuItem}
                </ul>

                <div className="">
                    <button className='btn bg-transparent hover:bg-[#437EF7] border-0 text-white px-5 me-4'>Login</button>
                    <button className='btn bg-transparent hover:bg-[#437EF7] border-0 text-white px-5'>Sign up</button>
                </div>
            </div>

            <div className='navbar-end lg:hidden'>
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black right-0	">
                        {menuItem}
                        <li className='my-1'><button className="btn content-center">Login</button></li>
                        <li className=''><button className="btn content-center">Sign up</button></li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Header;