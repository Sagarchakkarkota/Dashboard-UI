import toast from "react-hot-toast";
import UseForm from "../components/userForm";
import Toast from "src/UI/toast";

export default function EditUserForm({
  editmodalShow,
  setEditmodalShow,
  updatedData,
  setUpdatedData,
  editValue,
}) {
  const { id, photo, name, email, phone, username, website } = editValue || {};

  function closeModal() {
    setEditmodalShow(false);
  }

  const defaultValues = {
    photo: "",
    name: name,
    email: email,
    phone: phone,
    username: username,
    website: website,
  };

  const photoUrlConverter = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const photoReader = reader.result;
        resolve(photoReader);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const onSubmit = async (value) => {
    if (value.photo[0]) {
      const photoUrl = await photoUrlConverter(value.photo[0]);

      value = { ...value, photo: photoUrl };
    }
    const index = updatedData?.findIndex((dataItem) => dataItem.id === id);
    const updatedUsers = [...updatedData];
    updatedUsers.splice(index, 1, value);
    setUpdatedData(updatedUsers);
    toast.success(<Toast message={"Edited User Successfully"} />);
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
