import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import React, { Fragment } from "react";

const SelectListBox = ({ field, options, error }) => {
  return (
    <div>
      <Listbox
        value={field?.value}
        onChange={(value) => {
          field?.onChange(value);
        }}
      >
        <div className="relative mt-1">
          <Listbox.Button className="border p-2 border-black rounded-md w-full">
            <span className="block truncate">
              {field?.value.charAt(0).toUpperCase() + field?.value.slice(1) ||
                "Select Gender"}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-400"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="border border-gray-400  absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {options?.map((item) => (
                <Listbox.Option
                  key={item.name}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-gray-300 " : "text-gray-900"
                    }`
                  }
                  value={item.value}
                >
                  {item.name}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
      {error && <p className="text-red-600 px-1 text-xs">{error?.message}</p>}
    </div>
  );
};

export default SelectListBox;
