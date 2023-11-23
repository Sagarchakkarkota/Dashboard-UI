import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { editMember } from '../../../../api/api'
import { IoClose } from "react-icons/io5";
export default function EditModal({isOpen,setIsOpen ,value}) {
  const {id, name, email, gender, status}=value
  console.log(email)

const [formValue,setFormvalue]=useState({id:id,name:name, email:email, gender:gender ,status:status})
  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  const handleChange=(e)=>{
setFormvalue({...formValue,[e.target.name]:e.target.value})
  }
  
  const handleSubmit=()=>{
    editMember(formValue)

  }
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
        >
          Open dialog
        </button>
      </div>

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
                    Edit Details
                    <button onClick={closeModal}>
                    <IoClose/>

                    </button>
                  </Dialog.Title>
                  
                  
                  <form action="">

                  <div className="mt-2 flex flex-col gap-2">
                  <input type="text" name='id' id='id' className='border p-2 border-black rounded-sm hover:bg-gray-300' placeholder='Id' disabled={true} value={formValue.id} />
                    <input type="text" name='name' id='name' className='border p-2 border-black rounded-sm' placeholder='Name' value={formValue.name} onChange={handleChange} />
                    <input type="text" name='email' id='email' className='border p-2 border-black rounded-sm' placeholder='Email'  value={formValue.email} onChange={handleChange}/>
                    <input type="text" name='gender' id='gender' className='border p-2 border-black rounded-sm' placeholder='Gender' value={formValue.gender} onChange={handleChange}/>
                    <input type="text" name='status' id='status' className='border p-2 border-black rounded-sm' placeholder='Status' value={formValue.status} onChange={handleChange}/>
                
                    </div>


                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={()=>{handleSubmit();  closeModal();  }}
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
  )
}
