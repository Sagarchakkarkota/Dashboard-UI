import React from 'react'

const Input = ({label,type, name, id,  value, onChange}) => {
    
  return (
    <div>
     
        <label htmlFor="">{label}</label>
       <input type={type} name={name} id={id} className='border p-2 border-black rounded-sm w-full' placeholder={label} value={value} onChange={onChange}/>
    </div>
  )
}

export default Input
