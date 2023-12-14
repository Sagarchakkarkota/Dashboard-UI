import React from "react";

const Input = ({
  type,
  name,
  register,
  error,
  placeholder,
  label,
  validations,
}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        className="border p-2 border-black rounded-md w-full"
        type={type}
        {...register(name, validations)}
        placeholder={placeholder}
      />
      {error && <p className="text-red-600 px-1 text-xs">{error?.message}</p>}
    </div>
  );
};

export default Input;
