import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { VscSignIn } from "react-icons/vsc";
import { PiSignInFill } from "react-icons/pi";
import logo from '../../assets/jobrail_logo.png';
import { useContext } from 'react';
import AuthContext from '../../Context/AuthContext';

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const links = <>
        <Link className='text-[15px] font-semibold mr-6 border-b-2 pb-2 border-white hover:border-prime' to='/home'>Home</Link>
        <Link className='text-[15px] font-semibold mr-6 border-b-2 pb-2 border-white hover:border-prime' to='/jobs'>Find a Job</Link>
        <Link className='text-[15px] font-semibold mr-6 border-b-2 pb-2 border-white hover:border-prime' to='/blog'>Blog</Link>
        <Link className='text-[15px] font-semibold border-b-2 pb-2 border-white hover:border-prime' to='/contact'>Contact Us</Link>
    </>

    const handleSignout = () => {
        signOutUser()
            .then(() => {
                console.log('successsfully logged out')
            })
            .catch(() => {
                console.log('failed log out')
            })
    }

    return (
        <div className="navbar max-w-6xl mx-auto py-6">
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
                {
                    user ? <>
                        <Link onClick={handleSignout} to='/signin' className='btn bg-prime border-none text-white hover:-translate-y-[2px] hover:bg-[#F49BAB] transition  duration-200'>
                            <VscSignIn className='text-[17px]' />
                            Logout
                        </Link>
                    </> :
                        <>
                            <Link to='/register' className="link flex  items-center hover:text-prime hover:-translate-y-[2px] transition  duration-200 font-semibold">
                                <PiSignInFill className='text-[17px]' />
                                Register</Link>
                            <Link to='/signin' className='btn bg-prime border-none text-white hover:-translate-y-[2px] hover:bg-[#F49BAB] transition  duration-200'>
                                <VscSignIn className='text-[17px]' />
                                Sign in
                            </Link>
                        </>
                }
            </div>
        </div>
    );
};

export default Navbar;