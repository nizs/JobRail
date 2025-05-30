import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { VscSignIn } from "react-icons/vsc";
import { PiSignInFill } from "react-icons/pi";
import logo from '../../assets/jobrail_logo.png';

const Navbar = () => {
    const links = <>
        <Link className='text-[14px] font-semibold' to='/home'><li><a>Home</a></li></Link>
        <Link className='text-[14px] font-semibold' to='/jobs'><li><a>Find a Job</a></li></Link>
        <Link className='text-[14px] font-semibold' to='/blog'><li><a>Blog</a></li></Link>
        <Link className='text-[14px] font-semibold' to='/contact'><li><a>Contact Us</a></li></Link>
    </>
    return (
        <div className="navbar max-w-6xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to='/' className=" text-xl">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-4">
                <Link to='/register' className="link flex  items-center hover:text-prime hover:-translate-y-[2px] transition  duration-200 font-semibold">
                    <PiSignInFill className='text-[17px]' />
                    Register</Link>
                <Link to='/signin' className='btn bg-prime border-none text-white hover:-translate-y-[2px] hover:bg-[#F49BAB] transition  duration-200'>
                    <VscSignIn className='text-[17px]' />
                    Sign in
                </Link>
            </div>
        </div>
    );
};

export default Navbar;