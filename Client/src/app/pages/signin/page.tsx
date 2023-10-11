'use client';
import React, { useState } from 'react';
import NavBar from '@/app/components/navbar/page';
import Link from 'next/link';
import { PiEye, PiEyeClosed } from 'react-icons/pi';

const SignIn = () => {

  const [passwordFlag, setPasswordFlag] = useState(false);
  const [emailPhone, setEmailPhone] = useState('');
  const [password, setPassword] = useState('');
  
  const passwordFlagFun = () => {
    if(passwordFlag == true)
      setPasswordFlag(false);
    else
      setPasswordFlag(true);
  }

  const showValues = () => {
    console.log(emailPhone, password);
  }

  return (
    <>
      <NavBar className='fixed top-0 left-0 w-full'/>
      <div className='login h-[320px] w-100% mt-[120px] px-[270px]'>
        <div className='login-title flex text-[#424242]'>
          <h3 className='text-[22px] max-w-max font-[400]'>Welcome To  Daraz! Please Login.</h3>
          <p className='ml-auto float-right text-xs text-[#757575]'>New member? <Link href='signup' className='text-[#51A7CD]'>Register</Link>  Here.</p>
        </div>
        <div className='my-[30px]'>
          <form>
            <div className='login-Inputs bg-white h-[265px] flex flex-row gap-[10px] pl-[25px] pt-[25px] pr-[50px] pb-[50px]'>
              <div className='login-Inputs-left h-[183px] w-[60%] flex flex-col'>
                <div className='login-email-input w-100% h-[78px]'>
                  <label className='text-[12px] text-[#424242] mb-[5px]'>Phone Number or Email*</label>
                  <input 
                    type='text' 
                    placeholder='Please Enter Your Email or Phone' 
                    className='border 
                      border-[#DDDDDD] 
                      w-[90%] 
                      text-sm 
                      block 
                      flex-grow 
                      h-[40px] 
                      px-[10px] 
                      leading-normal 
                      bg-white 
                      text-gray-800 
                      me-2 
                      focus:outline-none'
                    value={ emailPhone }
                    onChange={ (e) => setEmailPhone(e.target.value) }
                  />
                </div>
                <div className='login-email-input w-100% h-[78px] relative'>
                  <label className='text-[12px] text-[#424242] mb-[5px]'>Password*</label>
                  <input 
                    type={passwordFlag ? 'text' :'password'} 
                    placeholder='Please Enter Password' 
                    id='passwordInput' 
                    className='border 
                      border-[#DDDDDD] 
                      w-[90%] 
                      text-sm 
                      block 
                      flex-grow 
                      h-[40px] 
                      px-[10px] 
                      leading-normal 
                      bg-white 
                      text-gray-800 
                      me-2 
                      focus:outline-none'
                    value={ password }
                    onChange={ (e) => setPassword(e.target.value) }
                    />
                  <div className='absolute right-[50px] top-[35px] cursor-pointer' onClick={ passwordFlagFun }>
                    { 
                      passwordFlag? <PiEye/> : <PiEyeClosed/> 
                    }
                  </div>
                </div>
                <div className='text-[#51A7CD] text-[12px] w-[90%] text-end'>
                  <Link href='#'>Reset Your Password</Link>
                </div>
              </div>
              <div className='login-Inputs-right  h-[183px] w-[40%] flex flex-col '>
                <div className=''>
                  <button 
                    type='submit' 
                    className='rounded-sm 
                      text-[#fff] 
                      my-[12px] 
                      w-100% 
                      h-[46px] 
                      bg-[#F57224] 
                      hover:bg-[#D0611E] 
                      transition 
                      duration-500'
                    onClick={ showValues }
                  >LOGIN</button>
                </div>
                <div>
                  <div>
                    <div>
                      <span className='text-[12px] text-[#424242] mb-[12px]'>Or, login with</span>
                    </div>
                    <div>
                      <button className='text-[#fff] my-[12px] w-100% h-[40px] bg-[#3B5998] rounded-sm'>Facebook</button>
                    </div>
                    <div>
                      <button className='text-[#fff] w-100% h-[40px] bg-[#D34836] rounded-sm'>Google</button>
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