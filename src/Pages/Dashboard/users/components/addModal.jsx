/* eslint-disable react/prop-types */
// import { Dialog, Transition } from "@headlessui/react";
// import { Fragment, useState } from "react";
// import toast from "react-hot-toast";
// import { IoClose } from "react-icons/io5";
// import input from "src/UI/input";
// export default function AddModal({
//   isOpen,
//   setIsOpen,
//   updatedData,
//   setUpdatedData,
// }) {
//   const [value, setValue] = useState({
//     id: updatedData.length + 1,
//     name: "",
//     email: "",
//     phone: "",
//     username: "",
//     website: "",
//   });
//   function closeModal() {
//     setIsOpen(false);
//   }

//   function openModal() {
//     setIsOpen(true);
//   }
//   const handleChange = (e) => {
//     setValue({ ...value, [e.target.name]: e.target.value });
//   };
//   const handleAddMember = () => {
//     const ExsistingUsers = updatedData.some((item) => {
//       return item.username.toLowerCase() == value.username.toLowerCase();
//     });

//     if (ExsistingUsers) {
//       toast.error("Userame  already exists", {
//         duration: 4000,
//         position: "bottom-right",
//       });
//     } else {
//       setUpdatedData([value, ...updatedData]);
//       toast.success("New Member Added Successfully", {
//         duration: 4000,
//         position: "bottom-right",
//       });

//       setValue({
//         id: "",
//         name: "",
//         email: "",
//         phone: "",
//         username: "",
//         website: "",
//       });
//     }
//   };
//   return (
//     <>
//       <div className="fixed inset-0 flex items-center justify-center">
//         <button
//           type="button"
//           onClick={openModal}
//           className="rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
//         >
//           Open dialog
//         </button>
//       </div>

//       <Transition appear show={isOpen} as={Fragment}>
//         <Dialog as="div" className="relative z-10" onClose={closeModal}>
//           <Transition.Child
//             as={Fragment}
//             enter="ease-out duration-300"
//             enterFrom="opacity-0"
//             enterTo="opacity-100"
//             leave="ease-in duration-200"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//           >
//             <div className="fixed inset-0 bg-black/25" />
//           </Transition.Child>

//           <div className="fixed inset-0 overflow-y-auto">
//             <div className="flex min-h-full items-center justify-center p-4 text-center">
//               <Transition.Child
//                 as={Fragment}
//                 enter="ease-out duration-300"
//                 enterFrom="opacity-0 scale-95"
//                 enterTo="opacity-100 scale-100"
//                 leave="ease-in duration-200"
//                 leaveFrom="opacity-100 scale-100"
//                 leaveTo="opacity-0 scale-95"
//               >
//                 <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
//                   <Dialog.Title
//                     as="h3"
//                     className="text-lg font-medium leading-6 text-gray-900 flex w-full justify-between"
//                   >
//                     Add Details
//                     <button onClick={closeModal}>
//                       <IoClose />
//                     </button>
//                   </Dialog.Title>

//                   <form action="">
//                     <div className="mt-2 flex flex-col gap-2">
//                       <input
//                         id="id"
//                         name="id"
//                         value={value.id}
//                         onChange={handleChange}
//                         label="ID"
//                       />
//                       <input
//                         id="name"
//                         name="name"
//                         value={value.name}
//                         label="Name"
//                         onChange={handleChange}
//                       />
//                       <input
//                         id="username"
//                         name="username"
//                         value={value.username}
//                         label="UserName"
//                         onChange={handleChange}
//                       />
//                       <input
//                         id="email"
//                         name="email"
//                         value={value.email}
//                         label="Email"
//                         onChange={handleChange}
//                       />
//                       <input
//                         id="phone"
//                         name="phone"
//                         value={value.phone}
//                         label="Phone"
//                         onChange={handleChange}
//                       />
//                       <input
//                         id="website"
//                         name="website"
//                         value={value.website}
//                         label="Website"
//                         onChange={handleChange}
//                       />
//                     </div>

//                     <div className="mt-4">
//                       <button
//                         type="button"
//                         className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
//                         onClick={() => {
//                           handleAddMember();
//                           closeModal();
//                         }}
//                       >
//                         Submit
//                       </button>
//                     </div>
//                   </form>
//                 </Dialog.Panel>
//               </Transition.Child>
//             </div>
//           </div>
//         </Dialog>
//       </Transition>
//     </>
//   );
// }
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { IoClose } from "react-icons/io5";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import InputHookForm from "./input/Index";

const schema = yup.object({
  name: yup.string().required(),
  username: yup.string().required(),
  email: yup.string().email("please enter valid email").required(),
  phone: yup.string().required().max(10, "please enter valid number"),
  website: yup.string().required(),
});
export default function AddModal({
  isOpen,
  setIsOpen,
  updatedData,
  setUpdatedData,
}) {
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  const {
    register,
    handleSubmit,
    formState: { errors, defaultValues },
    reset,
    formState,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (value) => {
    const ExsistingUsers = updatedData.some((item) => {
      return item.username.toLowerCase() == value.username.toLowerCase();
    });

    if (ExsistingUsers) {
      toast.error("Userame already exists", {
        duration: 4000,
        position: "bottom-right",
      });
    } else {
      setUpdatedData([value, ...updatedData]);
      toast.success("New Member Added Successfully", {
        duration: 4000,
        position: "bottom-right",
      });
      reset();
      closeModal();
    }
  };
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 flex w-full justify-between"
                  >
                    Add Details
                    <button onClick={closeModal}>
                      <IoClose />
                    </button>
                  </Dialog.Title>

                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mt-2 flex flex-col gap-2">
                      <InputHookForm
                        type="text"
                        name="name"
                        register={register}
                        error={errors?.name}
                        placeholder="Name"
                      />
                      <InputHookForm
                        type="text"
                        name="username"
                        register={register}
                        error={errors?.username}
                        placeholder="Username"
                      />
                      <InputHookForm
                        type="text"
                        name="email"
                        register={register}
                        error={errors?.email}
                        placeholder="Email"
                      />
                      <InputHookForm
                        type="phone"
                        name="phone"
                        register={register}
                        error={errors?.phone}
                        placeholder="Phone"
                      />
                      <InputHookForm
                        type="text"
                        name="website"
                        register={register}
                        error={errors?.website}
                        placeholder="Website"
                      />
                    </div>

                    <div className="mt-4">
                      <button
                        type="submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
