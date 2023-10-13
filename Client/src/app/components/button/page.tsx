import React, { ButtonHTMLAttributes, MouseEventHandler } from 'react'

interface buttonProps {
  type: 'button' | 'submit' | 'reset';
  className: string;
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ type, className, label, onClick}: buttonProps) => {
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