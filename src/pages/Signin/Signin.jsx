import React, { useContext, useState } from 'react';
import Lottie from 'lottie-react';
import loginAnime from '../../assets/lottie/login_animation.json';
import AuthContext from '../../Context/AuthContext';
import { Link } from 'react-router-dom';



const Signin = () => {
  const { signinUser } = useContext(AuthContext);

  const handleSignin = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);


    signinUser(email, password)
      .then(result => {
        console.log('signed in ',result.user)
      })
      .catch(error => {
        console.log(error.message)
      })

  }

  return (

    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <div className="py-6">
            <Lottie animationData={loginAnime}></Lottie>
          </div>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-5xl font-bold text-center my-5">Login Here!</h1>
          <form onSubmit={handleSignin} className="card-body">
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input type="email" name='email' className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" name='password' className="input" placeholder="Password" />
              <div><a className="link link-hover">Forgot password?</a></div>
              <div className='text-sm'>
                <span className='mr-2'>Don't Have an account?</span>
                <span className='text-prime hover:text-secondaryone'><Link to='/register'>Register Here</Link></span>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>

  );
};

export default Signin;