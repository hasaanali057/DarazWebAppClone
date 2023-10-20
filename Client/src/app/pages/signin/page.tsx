'use client';
import React, { useState } from 'react';
import NavBar from '@/app/components/navbar/page';
import Link from 'next/link';
import { PiEye, PiEyeClosed } from 'react-icons/pi';
import Input from '@/app/components/input/page';
import Button from '@/app/components/button/page';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation'

import * as Yup from 'yup';
import axios from 'axios';
const signinSchema = Yup.object({
  email: Yup.string().email().required('Email is Required'),
  password: Yup.string().min(8).required('Password is Required')
})

interface formValues {
  email: string;
  password: string;
}

const initialValues: formValues = {
  email: '',
  password: ''
}

const SignIn = () => {
  const navigate = useRouter();

  const { 
    values,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    touched
  } = useFormik({
    initialValues: initialValues,
    validationSchema: signinSchema,
    onSubmit: async (values, action) => {
      try {
        const response =await axios.post('http://localhost:4000/auth/signin',{
          email: values.email,
          password: values.password
        })
        console.log(response);
        if(response.data.status != 201 ){
          throw new Error('SignIn Failed');
        }
        navigate.push('/');
      } catch (error) {
        console.log('Axios Error', error)
      }
      action.resetForm();
      return;
    }
  })
  
  const [passwordFlag, setPasswordFlag] = useState(false);
  
  const passwordFlagFun = () => {
    if(passwordFlag == true)
      setPasswordFlag(false);
    else
      setPasswordFlag(true);
  }

  return (
    <>
      <NavBar className='fixed top-0 left-0 w-full' url='/'/>
      <div className='login h-80 w-full mt-32 px-68'>
        <div className='login-title flex text-neutral-650'>
          <h3 className='text-[22px] max-w-max font-[400]'>Welcome To  Daraz! Please Login.</h3>
          <p className='ml-auto float-right text-xs text-neutral-450'>New member? <Link href='signup' className='text-[#51A7CD]'>Register</Link>  Here.</p>
        </div>
        <div className='my-8'>
          <form onSubmit={ handleSubmit }>
            <div className='login-Inputs bg-white h-265 flex flex-row gap-[10px] pl-6 pt-6 pr-12 pb-12'>
              <div className='login-Inputs-left h-183 w-60%  flex flex-col'>
                <div className='login-email-input w-full h-20'>
                  <Input 
                    label='Phone Number or Email*'
                    placeholder='Please Enter Your Email or Phone'
                    type='text'
                    value={ values.email }
                    onChange={ handleChange }
                    onBlur ={ handleBlur } 
                    name='email' 
                    id='email'   
                  />
                  { errors.email && touched.email ? 
                    <p className='text-xs text-red-600'>{errors.email}</p>:
                    null
                  }
                </div>
                <div className='login-email-input w-full h-20 relative'>
                  <Input 
                    label='Password*'
                    placeholder='Please Enter Your Password'
                    type={ passwordFlag ? 'text' : 'password' }
                    value={ values.password }
                    onChange={ handleChange }
                    onBlur={ handleBlur }
                    name='password'
                    id='password'
                  />
                  { errors.password && touched.password ? 
                    <p className='text-xs text-red-600'>{errors.password}</p>:
                    null
                  }
                  <div className='absolute right-14 top-9 cursor-pointer' onClick={ passwordFlagFun }>
                    { 
                      passwordFlag? <PiEye/> : <PiEyeClosed/> 
                    }
                  </div>
                </div>
                <div className='text-blue-350 text-xs w-90% text-end'>
                  <Link href='#'>Reset Your Password</Link>
                </div>
              </div>
              <div className='login-Inputs-right h-183 w-40% flex flex-col '>
                <div className=''>
                  {/* <Button 
                    type='submit'
                    label='LOGIN'
                    className='rounded-sm
                    text-white
                    my-3
                    w-full
                    h-11
                    bg-orange-450
                    hover:bg-orange-650
                    transition
                    duration-500'
                    onClick={}                  
                  /> */}
                  <button 
                    type='submit' 
                    className='rounded-sm
                      text-white
                      my-3
                      w-full
                      h-11
                      bg-orange-450
                      hover:bg-orange-650
                      transition
                      duration-500'
                  >LOGIN</button>
                </div>
                <div>
                  <div>
                    <div>
                      <span className='text-[12px] text-neutral-650 mb-[12px]'>Or, login with</span>
                    </div>
                    <div>
                      <button type='button' className='text-white my-3 w-full h-10 bg-blue-550 rounded-sm'>Facebook</button>
                    </div>
                    <div>
                      <button type='button' className='text-white w-full h-10 bg-red-450 rounded-sm'>Google</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignIn;