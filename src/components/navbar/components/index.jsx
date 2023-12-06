import { Combobox, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import useGetSearchDetails from "./hooks/useGetSearchDetails";
import { CheckIcon } from "@heroicons/react/20/solid";
export default function SearchBar() {
  const {
    filteredItems,
    handlePath,
    manageKeyRef,
    setValue,
    value,
    selected,
    setSelected,
    handleEnter,
    handleSelected,
  } = useGetSearchDetails();

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key == "/") {
        e.preventDefault();
        manageKeyRef.current.click();
      }
    };

    document.addEventListener("keydown", handleKey);

    return () => {
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  return (
    <div className="px-4 flex-grow h-[80%]  flex items-center  relative">
      <Combobox
        value={selected}
        onChange={setSelected}
        onSelect={handleSelected}
      >
        <div className="relative mt-1 w-full">
          <div className="relative w-full rounded-lg border border-gray-200 text-left shadow-md  focus:outline-none   sm:text-sm">
            <button className="absolute inset-y-0 left-2 flex items-center pr-2">
              <FaSearch className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </button>
            <p className="text-gray-400  absolute inset-y-0  right-1 flex items-center pr-2  ">
              /
            </p>
            <Combobox.Button ref={manageKeyRef} className=" w-full">
              <Combobox.Input
                onKeyDown={handleEnter}
                className=" w-full focus:outline-none rounded-md px-8 py-1 "
                displayValue={(person) => person.name}
                onChange={(event) => {
                  setValue(event.target.value);
                }}
                autoComplete="off"
                placeholder="Quick Search"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setValue("")}
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {filteredItems.length === 0 && value !== "" ? (
                <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredItems.map((person) => (
                  <Combobox.Option
                    key={person.id}
                    onClick={() => {
                      handlePath(person.path);
                    }}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-teal-600 text-white" : "text-gray-900"
                      }`
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {person.name}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-white" : "text-teal-600"
                            }`}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}
