import React from "react";

const Select = ({
  register,
  error,
  label,
  name,
  placeholder,
  selectOptions,
}) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <select
        type="select"
        className="border p-2 border-black rounded-md w-full"
        {...register(name, {
          required: `${label ? label : placeholder} is required`,
        })}
        defaultValue=""
        placeholder={placeholder}
      >
        <option value="" disabled>
          Select {label ? label : placeholder}
        </option>

        {selectOptions?.map(({ value, title }, index) => {
          return (
            <option key={index} value={value}>
              {title}
            </option>
          );
        })}
      </select>
      {error && <p className="text-red-600 text-xs px-1">{error?.message}</p>}
    </>
  );
};

export default Select;
