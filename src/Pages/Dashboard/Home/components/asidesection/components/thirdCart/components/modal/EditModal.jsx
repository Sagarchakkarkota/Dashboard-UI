import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import Modal from "src/components/modal";
import Input from "../../../../../../../../../UI/input/Index";
import { editMember } from "../../../../../../../../../lib/axios/apiServices/goRestQuery/goRestQuery";

export default function EditModal({ isOpen, setIsOpen, value }) {
  const { id, name, email, gender, status } = value;
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id: id,
      name: name,
      email: email,
      gender: gender,
      status: status,
    },
  });

  function closeModal() {
    setIsOpen(false);
  }

  const mutation = useMutation({
    mutationFn: (mutateData) => {
      return editMember(mutateData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["member"] });
    },
  });

  const onSubmit = (value) => {
    console.log(value);
    mutation.mutate(value);
    closeModal();
  };
  return (
    <>
      <Modal showModal={isOpen} closeModal={closeModal} Title="Edit Member">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-2 flex flex-col gap-2">
            <Input
              type="text"
              name="name"
              register={register}
              error={errors?.name}
              placeholder="Name"
            />
            <Input
              type="text"
              name="email"
              register={register}
              error={errors?.email}
              placeholder="Email"
            />
            <Input
              type="text"
              name="gender"
              register={register}
              error={errors?.gender}
              placeholder="Gender"
            />
            <Input
              type="text"
              name="status"
              register={register}
              error={errors?.status}
              placeholder="Status"
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
      </Modal>
    </>
  );
}
