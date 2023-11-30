import { useMutation } from "@tanstack/react-query";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../services/axiosInstance";

const useLogIn = () => {
  const [value, setValue] = useState({
    email: "",
    password: "",
    device_name: "windows",
  });
  const navigate = useNavigate();

  const getLogin = async (value) => {
    try {
      const res = await axiosInstance.post("/login", value);
      return res;
    } catch (error) {
      throw new Error("Failed to fetch user data");
    }
  };

  const mutation = useMutation({
    mutationFn: (value) => {
      return getLogin(value);
    },
    onSuccess: (data) => {
      localStorage.setItem("token", data.data.token);
      navigate("/");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(value);
  };
  return {
    value,
    setValue,
    handleSubmit,
  };
};

export default useLogIn;
