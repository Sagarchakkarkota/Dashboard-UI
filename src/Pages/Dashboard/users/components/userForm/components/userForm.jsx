import { useForm } from "react-hook-form";
import Input from "src/UI/input/Index";
import Modal from "src/components/modal";

export default function UseForm({
  isOpen,
  onSubmit,
  closeModal,
  defaultValues,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValues,
  });

  return (
    <>
      <Modal showModal={isOpen} closeModal={closeModal} Title="Add Details">
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
              name="username"
              register={register}
              error={errors?.username}
              placeholder="Username"
            />
            <Input
              type="text"
              name="email"
              register={register}
              error={errors?.email}
              placeholder="Email"
            />
            <Input
              type="phone"
              name="phone"
              register={register}
              error={errors?.phone}
              placeholder="Phone"
            />
            <Input
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
      </Modal>
    </>
  );
}
