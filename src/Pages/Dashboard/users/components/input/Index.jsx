import React from "react";

const InputHookForm = ({ type, name, register, error, placeholder }) => {
  return (
    <div>
      <input
        className="border p-2 border-black rounded-md w-full"
        type={type}
        {...register(name)}
        placeholder={placeholder}
      />
      {error && <p className="text-red-600 text-xs">{error?.message}</p>}
    </div>
  );
};

export default InputHookForm;
