import React from "react";

const Input = ({ type, name, register, error, placeholder, label }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        className="border p-2 border-black rounded-md w-full"
        type={type}
        {...register(name, {
          required: ` ${label || placeholder} Address is required`,
        })}
        placeholder={placeholder}
      />
      {error && <p className="text-red-600 text-xs">{error?.message}</p>}
    </div>
  );
};

export default Input;
