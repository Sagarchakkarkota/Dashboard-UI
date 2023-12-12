import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import toast from "react-hot-toast";
import { IoClose } from "react-icons/io5";
import Input from "src/UI/Input";
export default function EditModal({
  editmodalShow,
  setEditmodalShow,
  updatedData,
  setUpdatedData,
  editValue,
}) {
  const { id, name, email, phone, username, website } = editValue || {};
  const [value, setValue] = useState({
    id: id,
    name: name,
    email: email,
    phone: phone,
    username: username,
    website: website,
  });
  function closeModal() {
    setEditmodalShow(false);
  }

  function openModal() {
    setEditmodalShow(true);
  }
  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  const handleAddMember = () => {
    const index = updatedData.findIndex((dataItem) => dataItem.id === value.id);
    const updatedUsers = [...updatedData];
    updatedUsers.splice(index, 1, value);
    setUpdatedData(updatedUsers);
    toast.success("Edited User Successfully", {
      duration: 4000,
      position: "bottom-right",
    });
  };
  return (
    <>
      <Transition appear show={editmodalShow} as={Fragment}>
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
                    Edit Modal
                    <button onClick={closeModal}>
                      <IoClose />
                    </button>
                  </Dialog.Title>

                  <form action="">
                    <div className="mt-2 flex flex-col gap-2">
                      <Input
                        id="name"
                        name="name"
                        value={value.name}
                        label="Name"
                        onChange={handleChange}
                      />
                      <Input
                        id="username"
                        name="username"
                        value={value.username}
                        label="UserName"
                        onChange={handleChange}
                      />
                      <Input
                        id="email"
                        name="email"
                        value={value.email}
                        label="Email"
                        onChange={handleChange}
                      />
                      <Input
                        id="phone"
                        name="phone"
                        value={value.phone}
                        label="Phone"
                        onChange={handleChange}
                      />
                      <Input
                        id="website"
                        name="website"
                        value={value.website}
                        label="Website"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={() => {
                          handleAddMember();
                          closeModal();
                        }}
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
