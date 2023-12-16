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
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValues,
  });
  const validateImage = (value) => {
    const file = value[0];

    if (file.size > 50000) {
      return "File size exceeds 50KB limit";
    }

    const allowedTypes = ["image/jpeg", "image/png", "image/svg+xml"];
    if (!allowedTypes.includes(file.type)) {
      return "Allowed file types: JPG, PNG, SVG";
    }

    return true;
  };
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
              validations={{
                required: "Name is required",
                pattern: {
                  value: /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/,
                  message: "Please enter valid name",
                },
              }}
            />

            <label htmlFor="photo">Profile Picture</label>
            <input
              type="file"
              accept=".jpg, .jpeg, .png, .svg"
              {...register("photo", {
                validate: validateImage,
                required: "Photo is required",
              })}
            />
            {errors?.photo && (
              <p className="text-red-600 px-1 text-xs">
                {errors?.photo.message}
              </p>
            )}

            <Input
              type="text"
              name="username"
              register={register}
              error={errors?.username}
              placeholder="Username"
              validations={{
                required: "Please Select Image",
              }}
            />
            <Input
              type="text"
              name="email"
              register={register}
              error={errors?.email}
              placeholder="Email"
              validations={{
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Enter valid email address eg.demo@gmail.com",
                },
              }}
            />
            <Input
              type="phone"
              name="phone"
              register={register}
              error={errors?.phone}
              placeholder="Phone"
              validations={{
                required: "Phone is required",
                pattern: {
                  value: /^\d{3}-\d{3}-\d{4}$/,
                  message: "Enter Valid phone number eg.666-525-5502",
                },
              }}
            />
            <Input
              type="text"
              name="website"
              register={register}
              error={errors?.website}
              placeholder="Website"
              validations={{
                required: "Website is required",
              }}
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
