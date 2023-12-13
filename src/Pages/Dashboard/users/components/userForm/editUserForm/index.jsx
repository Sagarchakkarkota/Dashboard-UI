import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Input from "src/UI/input/Index";
import Modal from "src/components/modal";
import * as yup from "yup";
import UseForm from "../components/userForm";

export default function EditUserForm({
  editmodalShow,
  setEditmodalShow,
  updatedData,
  setUpdatedData,
  editValue,
}) {
  const { id, name, email, phone, username, website } = editValue || {};

  function closeModal() {
    setEditmodalShow(false);
  }

  const defaultValues = {
    name: name,
    email: email,
    phone: phone,
    username: username,
    website: website,
  };
  const onSubmit = (value) => {
    const index = updatedData?.findIndex((dataItem) => dataItem.id === id);
    const updatedUsers = [...updatedData];
    updatedUsers.splice(index, 1, value);
    setUpdatedData(updatedUsers);
    toast.success("Edited User Successfully", {
      duration: 4000,
      position: "bottom-right",
    });
    closeModal();
  };

  return (
    <>
      <UseForm
        onSubmit={onSubmit}
        defaultValues={defaultValues}
        isOpen={editmodalShow}
        closeModal={closeModal}
      />
    </>
  );
}
