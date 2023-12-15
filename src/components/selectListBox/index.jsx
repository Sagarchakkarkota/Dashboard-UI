// import { Listbox, Transition } from "@headlessui/react";

// const SelectListBox = ({
//   options,
//   selectedPerson,
//   setSelectedPerson,
//   name,
//   register,
//   errors,
//   setValue,
// }) => {
//   return (
//     <>
//       <Listbox
//         value={selectedPerson.value}
//         onChange={(value) => {
//           setSelectedPerson(value);
//           setValue(value);
//         }}
//       >
//         <Listbox.Button
//           {...register("gender", { required: "Select filed is required" })}
//           className="border p-2 border-black rounded-md w-full"
//         >
//           {selectedPerson?.title}
//         </Listbox.Button>
//         <Transition
//           enter="transition duration-800 ease-out"
//           enterFrom="transform scale-95 opacity-0"
//           enterTo="transform scale-100 opacity-100"
//           leave="transition duration-75 ease-out"
//           leaveFrom="transform scale-100 opacity-100"
//           leaveTo="transform scale-95 opacity-0"
//           className="border p-2 border-black rounded-md w-full"
//         >
//           <Listbox.Options>
//             {options?.map((item) => (
//               <Listbox.Option key={item.value} value={item.value}>
//                 {item.title}
//               </Listbox.Option>
//             ))}
//           </Listbox.Options>
//         </Transition>
//       </Listbox>
//       {errors?.gender && (
//         <p className="text-red-600 px-1 text-xs">{errors?.gender?.message}</p>
//       )}
//     </>
//   );
// };
// export default SelectListBox;

import { Listbox, Transition } from "@headlessui/react";

const SelectListBox = ({
  options,
  selectedPerson,
  setSelectedPerson,
  register,
  name,
  errors,
  setValue,
}) => {
  const handleSelectionChange = (selectedItem) => {
    console.log(selectedItem);
  };

  return (
    <>
      <Listbox value={selectedPerson.value} onChange={handleSelectionChange}>
        <Listbox.Button
          className={"border border-red-500"}
          {...register("gender", { required: "gender is required" })}
        >
          {selectedGender.name || selectedGender}
        </Listbox.Button>
        <Transition
          enter="transition duration-800 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
          className="border p-2 border-black rounded-md w-full"
        >
          <Listbox.Options>
            {options?.map((item) => (
              <Listbox.Option key={item.value} value={item.value}>
                {item.title}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </Listbox>
      {errors?.[name] && (
        <p className="text-red-600 px-1 text-xs">{errors?.[name].message}</p>
      )}
    </>
  );
};

export default SelectListBox;
