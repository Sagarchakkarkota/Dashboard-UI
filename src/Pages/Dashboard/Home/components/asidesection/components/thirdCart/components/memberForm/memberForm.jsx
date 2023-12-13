import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { setIsModal, setMembers } from "src/Pages/Dashboard/Home/MemberSlice";
import Input from "src/UI/input/Index";
import Modal from "src/components/modal/index";
import { addNewMember } from "src/lib/axios/apiServices/goRestQuery/goRestQuery";
import * as Yup from "yup";
const schema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().required("Email is required"),
  gender: Yup.string().required("Gender is required"),
  status: Yup.string().required("Status is required eg.active/inactive"),
});
const MemberForm = () => {
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
    resolver: yupResolver(schema),
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
};

export default MemberForm;
