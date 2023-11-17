import React from "react";

const Input = ({ type, id, name, onchange, value, label, errors }) => {
  return (
    <div>
      <div className="mb-4">
        <label htmlFor={id} className="block font-medium">
          {label}
        </label>
        <input
          type={type}
          id={id}
          name={name}
          className="w-full p-2 border rounded-md"
          onChange={onchange}
          value={value}
        />
        {errors && <p className="text-red-500 text-xs mt-1">{errors}</p>}
      </div>
    </div>
  );
};

export default Input;
