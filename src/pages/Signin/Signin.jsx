import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Lottie from 'lottie-react';
import loginAniime from '../../assets/lottie/login_animation.json';

const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(8, 'Min 8 characters').required('Password is required'),
});

const Signin = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {

    console.log('Form Data Submitted:', data);

    // Reset form fields
    reset();
    setPhotoUrl(null);
  };

  return (

    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse gap-12">
        <div className="w-3/4 lg:w-1/2 text-center lg:text-left">
          <p className="py-6">
            <Lottie animationData={loginAniime}></Lottie>
          </p>
        </div>
        {/* form */}
        <div className="w-full lg:w-1/2 p-6 border rounded-sm shadow-md" style={{ borderColor: '#d9d7d7' }}>
          <h2 className="text-2xl font-semibold mt-6 mb-6 text-center" style={{ color: '#7f55b1' }}>LOGIN</h2>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="grid grid-cols-1 gap-4">
              {['email', 'password'].map((field, i) => (
                <div key={i} className="mb-4">
                  <label className="block capitalize mb-1" style={{ color: '#817d7d' }}>{field.replace(/([A-Z])/g, ' $1')}</label>
                  <input
                    type={field.toLowerCase().includes('password') ? 'password' : 'text'}
                    {...register(field)}
                    className="w-full h-10 px-3 py-2 border rounded border-[#b3aeae]"
                  />
                  {errors[field] && <p className="text-red-500 text-sm">{errors[field]?.message}</p>}
                </div>
              ))}
            </div>

            <button
              type="submit"
              className="w-full py-2 my-4 btn bg-prime hover:bg-[#F49BAB] border-none text-white cursor-pointer"
            >
              LOGIN
            </button>
          </form>
        </div>
      </div>
    </div>

  );
};

export default Signin;