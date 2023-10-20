import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React, { MouseEventHandler } from 'react'

interface buttonProps {
  type: 'button' | 'submit' | 'reset';
  className: string;
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ type, className, label, onClick}: buttonProps) => {
  const { data: session } = useSession();
  if(session && session.user){
    return (
      <div className=''>
        <p className=''>{session.user.name}</p>
        <Link href={''} className=''>
          Sign Out
        </Link>
      </div>
    )  
  }
  return (
    <>
      <button 
        type= { type }
        className= { className }
        onClick={ onClick }
      >{ label }</button>
    </>
  )
}

export default Button