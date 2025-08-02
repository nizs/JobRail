import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import team1 from '../../assets/team/jobrail_banner_01.jpg';
import team2 from '../../assets/team/jobrail_banner_02.jpg';
import { FaArrowAltCircleRight  } from "react-icons/fa";

const Banner = () => {
    return (
        <div className="hero bg-[#F2F6FD] min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse max-w-6xl mx-auto">
                <div className='hidden md:block flex-1 flex flex-col items-center'>
                    <motion.img
                        src={team1}
                        animate={{ y: [50, 100, 50] }}
                        transition={{ duration: 10, repeat: Infinity, ease: [0, 0.71, 0.2, 1.01] }}
                        className="max-w-sm w-96 rounded-t-[40px] rounded-br-[40px] border-l-8 border-b-8 border-prime shadow-2xl"
                    />
                    <motion.img
                        src={team2}
                        animate={{ x: [150, 200, 150] }}
                        transition={{ duration: 10, repeat: Infinity, ease: [0, 0.71, 0.2, 1.01] }}
                        className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-l-8 border-b-8 border-prime shadow-2xl"
                    />
                </div>
                <div className='flex-1'>
                    <h1 className="text-[42px] md:text-[52px] font-[700] text-[#05264E] text-base/16">The <span className='text-prime'>Easiest Way</span> to Get Your New Job!</h1>
                    <p className="py-6 text-[20px] text-[#4f5e64] tracking-tight">
                        Each month, more than 3 million job seekers turn to website in their search for work, making over 140,000 applications every single day
                    </p>
                    <Link to='/signin' className='btn bg-prime border-none text-white hover:-translate-y-[2px] hover:bg-[#F49BAB] transition  duration-200 my-4'>
                        <FaArrowAltCircleRight  className='text-[17px]' />
                        Sign in
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;