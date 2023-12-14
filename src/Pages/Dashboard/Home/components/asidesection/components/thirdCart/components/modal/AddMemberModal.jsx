import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { setIsModal, setMembers } from "src/Pages/Dashboard/Home/MemberSlice";
import Input from "src/UI/input/Index";
import Select from "src/UI/select";
import Modal from "src/components/modal/index";
import { addNewMember } from "src/lib/axios/apiServices/goRestQuery/goRestQuery";
import { selectGender } from "./utility";

const AddMemberModal = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const isModal = useSelector((state) => state.member.isModal);

  const mutation = useMutation({
    mutationFn: (mutateData) => {
      return addNewMember(mutateData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["member"] });
    },
  });

  const closeModal = () => {
    dispatch(setIsModal(false));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id: new Date().getTime(),
      name: "",
      email: "",
      gender: "",
      status: "inactive",
    },
  });

  const onSubmit = (values) => {
    const { id, name, email, gender, status } = values;
    mutation.mutate({
      id: id,
      name: name,
      email: email,
      gender: gender,
      status: status,
    });
    dispatch(setMembers(values));
    toast.success("Added Member Successfully", {
      duration: 4000,
      position: "bottom-right",
    });
    dispatch(setIsModal(false));
  };

  return (
    <>
      <Modal showModal={isModal} closeModal={closeModal} Title="Add Member">
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
                  value: /^[A-Za-z]+$/,
                  message: "Name should not contain numbers",
                },
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
                  value: /^[\w\.-]+@[a-z]+\.[a-z]{2,}$/,
                  message: "Enter valid email address eg.demo@gmail.com",
                },
              }}
            />
            {/* <select
              type="select"
              className="border p-2 border-black rounded-md w-full"
              {...register("gender", { required: "Gender is required" })}
              defaultValue=""
            >
              <option value="" disabled>
                Select Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select> */}
            <Select
              register={register}
              error={errors?.gender}
              placeholder="Gender"
              name="gender"
              selectOptions={selectGender}
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
};

export default AddMemberModal;
