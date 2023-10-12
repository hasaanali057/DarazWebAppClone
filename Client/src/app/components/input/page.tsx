import React, { ChangeEvent } from 'react'

interface input {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ label, type, placeholder, value, onChange }: input) => {
  return (
    <>
    <label className='text-xs text-neutral-650 mb-1'>{label}</label>
    <input 
      type={type}
      placeholder={placeholder}
      className='border
        border-neutral-200
        w-90%
        text-sm
        h-10
        px-3
        leading-normal
        bg-white
        text-gray-800
        me-2
        focus:outline-none'
      value={ value }
      onChange={ onChange }
      // value={ emailPhone }
      // onChange={ (e) => setEmailPhone(e.target.value) }
    />
    </>
  )
}

export default Input;