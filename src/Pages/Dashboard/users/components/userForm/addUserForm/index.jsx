import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import UseForm from "../components/userForm";

export default function AddUserForm({
  isOpen,
  setIsOpen,
  updatedData,
  setUpdatedData,
}) {
  function closeModal() {
    setIsOpen(false);
  }

  const { reset } = useForm();

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
      <UseForm
        onSubmit={onSubmit}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        closeModal={closeModal}
      />
    </>
  );
}
