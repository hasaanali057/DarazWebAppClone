import React, { ChangeEvent, FocusEvent } from 'react'

interface input {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  name: string;
  id: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: FocusEvent<HTMLInputElement>) => void;
}

const Input = ({ label, type, placeholder, value, onChange, name, id, onBlur }: input) => {
  return (
    <>
    <label className='text-xs text-neutral-650 mb-1'>{label}</label>
    <input
      type={ type }
      placeholder={ placeholder }
      id={ id }
      name={ name }
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
      onBlur={ onBlur }
    />
    </>
  )
}

export default Input;