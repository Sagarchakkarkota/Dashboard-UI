// import { Combobox, Transition } from "@headlessui/react";
// import { Fragment, useEffect } from "react";
// import { FaSearch } from "react-icons/fa";
// import useGetSearchDetails from "./hooks/useGetSearchDetails";
// export default function SearchBar() {
//   const {
//     filteredPeople,
//     handlePath,
//     handleClick,
//     keyRef,
//     setValue,
//     isOpen,
//     setIsOpen,
//   } = useGetSearchDetails();

//   useEffect(() => {
//     const handleKey = (e) => {
//       if (e.key == "/") {
//         keyRef.current.focus();
//         setIsOpen(true);
//       }
//     };

//     document.addEventListener("keydown", handleKey);

//     return () => {
//       document.removeEventListener("keydown", handleKey);
//     };
//   }, []);
//   return (
//     <div className="px-4 flex-grow h-[80%]  flex items-center  relative">
//       <Combobox value={isOpen} onChange={setIsOpen}>
//         <div className="relative mt-1 w-full">
//           <div className="relative w-full rounded-lg bg-white text-left shadow-md focus:outline-none   sm:text-sm">
//             <button
//               className="absolute inset-y-0 left-2 flex items-center pr-2"
//               onClick={handleClick}
//             >
//               <FaSearch className="h-5 w-5 text-gray-400" aria-hidden="true" />
//             </button>
//             <p className="text-gray-400  absolute inset-y-0  right-1 flex items-center pr-2  ">
//               /
//             </p>

//             <Combobox.Input
//               ref={keyRef}
//               onClick={() => {
//                 setIsOpen(true);
//               }}
//               onBlur={() => {
//                 setIsOpen(false);
//               }}
//               className="border border-gray-600 w-full rounded-md px-8 py-1"
//               displayValue={(person) => person.name}
//               onChange={(event) => setValue(event.target.value)}
//               autoComplete="off"
//               placeholder="Quick Search"
//             />
//           </div>
//           <Transition
//             as={Fragment}
//             show={isOpen}
//             leave="transition ease-in duration-100"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//             afterLeave={() => setValue("")}
//           >
//             <Combobox.Options className="absolute mt-1 p-0 max-h-60 w-full  rounded-md bg-white shadow-lg sm:text-sm">
//               {filteredPeople.map(({ id, name }) => (
//                 <Combobox.Option
//                   key={id}
//                   onClick={() => {
//                     handlePath(name);
//                     setIsOpen(false);
//                   }}
//                   className="text-black font-semibold py-1 px-4 hover:bg-gray-200 cursor-pointer"
//                 >
//                   {name}
//                 </Combobox.Option>
//               ))}
//             </Combobox.Options>
//           </Transition>
//         </div>
//       </Combobox>
//     </div>
//   );
// }

import { Combobox, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import useGetSearchDetails from "./hooks/useGetSearchDetails";
export default function SearchBar() {
  const { filteredPeople, handlePath, manageKeyRef, setValue } =
    useGetSearchDetails();
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
      <Combobox>
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
                className=" w-full focus:outline-none rounded-md px-8 py-1 "
                displayValue={(person) => person.name}
                onChange={(event) => setValue(event.target.value)}
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
            <Combobox.Options className="absolute mt-1 p-0 max-h-60 w-full  rounded-md bg-white shadow-lg sm:text-sm">
              {filteredPeople.map(({ id, name, path }) => (
                <Combobox.Option
                  key={id}
                  onClick={() => {
                    handlePath(path);
                  }}
                  className="text-black font-semibold py-1 px-4 hover:bg-gray-200 cursor-pointer"
                >
                  {name}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}
