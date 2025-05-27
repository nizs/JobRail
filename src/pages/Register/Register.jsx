import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Lottie from 'lottie-react';
import regAniime from '../../assets/lottie/register_animation.json';
import AuthContext from '../../Context/AuthContext';



// schema
const schema = yup.object().shape({
  firstName: yup.string().required('First name is required').max(30),
  lastName: yup.string().required('Last name is required').max(30),
  desiredField: yup.string().required('Desired field is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(8, 'Min 8 characters').required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Re-enter password'),
  photo: yup.mixed().required('Photo is required'),
});




const Register = () => {
  const [photoUrl, setPhotoUrl] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const { createuser } = useContext(AuthContext);


  // photourl upload-----

  // const imageFile = data.photo[0];
  // const imageUrl = URL.createObjectURL(imageFile);
  // setPhotoUrl(imageUrl);


  const onSubmit = (data) => {

    createuser(data.email, data.password)
      .then(result => {
        const payload = result.user;
        console.log('Form Data Submitted:', payload);
      })
      .catch(err => {
        console.log(err.message);
      })


    // Reset form fields
    reset();
    setPhotoUrl(null);
  };

  const handlePhotoChange = (e) => {
    setValue('photo', e.target.files);
    const file = e.target.files[0];
    if (file) setPhotoUrl(URL.createObjectURL(file));
  };

  return (

    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse gap-12">
        <div className="w-3/4 lg:w-1/2 text-center lg:text-left">
          <p className="py-6">
            <Lottie animationData={regAniime}></Lottie>
          </p>
        </div>
        {/* form */}
        <div className="w-full lg:w-1/2 p-6 border rounded-sm shadow-md" style={{ borderColor: '#d9d7d7' }}>
          <h2 className="text-2xl font-semibold mt-6 mb-6 text-center" style={{ color: '#7f55b1' }}>REGISTER HERE</h2>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {['firstName', 'lastName', 'desiredField', 'email', 'password', 'confirmPassword'].map((field, i) => (
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

              <div className="mb-4 md:col-span-2">
                <label className="block mb-1" style={{ color: '#817d7d' }}>Upload Your Photo</label>
                <label className="cursor-pointer bg-[#F49BAB] hover:bg-prime text-white py-2 px-4 rounded inline-block relative overflow-hidden group">
                  Upload Photo
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                </label>
                {errors.photo && <p className="text-red-500 text-sm">{errors.photo.message}</p>}
              </div>

              {photoUrl && (
                <div className="mb-4 md:col-span-2">
                  <p className="text-sm text-gray-600 mb-1">Preview:</p>
                  <img src={photoUrl} alt="Uploaded Preview" className="h-24 w-24 object-cover rounded-full" />
                  <p className="text-xs mt-1 text-gray-500 break-all">{photoUrl}</p>
                </div>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-2 my-4 btn bg-prime hover:bg-[#F49BAB] border-none text-white cursor-pointer"
            >
              REGISTER
            </button>
          </form>
        </div>
      </div>
    </div>

  );
};

export default Register;