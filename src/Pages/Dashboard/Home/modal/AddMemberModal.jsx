import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AiOutlineClose } from "react-icons/ai";
import { setIsModal, setMembers } from "../MemberSlice";
import { useDispatch } from "react-redux";
const Modal = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      occupation: "",
      profilepicture: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      occupation: Yup.string().required("Occupation is required"),
      profilepicture: Yup.string().required("Profile picture is required"),
    }),
    onSubmit: (values) => {
      dispatch(setMembers(values));
      formik.resetForm();
      dispatch(setIsModal(false));
    },
  });

  return (
    <div className="  fixed top-0 left-0 h-full w-full flex items-center justify-center  bg-gradient-to-br from-red-600 to-orange-400">
      <div className="absolute w-full h-full bg-gray-900 opacity-50"></div>
      <div className="z-50 bg-blue-200 rounded-lg shadow-lg p-4 w-96 relative">
        <h2 className="text-xl font-semibold mb-4">Add Member</h2>
        <button
          type="button"
          className="absolute top-[20px] right-[20px] text-gray-600 hover:text-gray-800"
          onClick={() => dispatch(setIsModal(false))}
        >
          <AiOutlineClose />
        </button>

        <form onSubmit={formik.handleSubmit}>
          <div className="h-[150px] w-[150px] bg-white  rounded-[80px] absolute top-[-110px] right-[110px]">
            {formik.values.profilepicture && (
              <img
                src={URL.createObjectURL(formik.values.profilepicture)}
                alt="Selected Profile"
                className="profile-image h-[150px] w-[150px] rounded-[80px]"
              />
            )}
          </div>

          <div className="mb-4">
            <input
              type="file"
              name="profilepicture"
              id="profilepicture"
              className="w-full p-2 "
              onChange={(e) => {
                formik.handleChange(e);
                const file = e.target.files[0];
                formik.setFieldValue("profilepicture", file);
              }}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="name" className="block font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2 border rounded-md"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            {formik.errors.name && (
              <p className="text-red-500 text-xs mt-1">{formik.errors.name}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="occupation" className="block font-medium">
              Occupation
            </label>
            <input
              type="text"
              id="occupation"
              name="occupation"
              className="w-full p-2 border rounded-md"
              onChange={formik.handleChange}
              value={formik.values.occupation}
            />
            {formik.errors.occupation && (
              <p className="text-red-500 text-xs mt-1">
                {formik.errors.occupation}
              </p>
            )}
          </div>

          <div className="text-right">
            <button
              type="submit"
              className="bg-blue-500 w-full text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Apply
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;

// <Input
//   type={"text"}
//   id={"profilePhoto"}
//   name={"profilePhoto"}
//   onChange={(e) => {
//     formik.handleChange(e);
//     setProfilePhoto(e.target.value);
//   }}
//   value={profilePhoto}
//   errors={formik.errors.profilePhoto}
//   label={"Profile Photo"}
// />
// <Input
//   type={"text"}
//   id={"name"}
//   name={"name"}
//   onChange={formik.handleChange}
//   value={formik.values.name}
//   label={"Name"}
//   errors={formik.errors.name}
// />
// <Input
//   type="text"
//   id="occupation"
//   name="occupation"
//   onChange={formik.handleChange}
//   value={formik.values.occupation}
//   errors={formik.errors.occupation}
//   label="Occupation"
// />