import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../authQueries";

const useLogIn = () => {
  const [value, setValue] = useState({
    email: "",
    password: "",
    device_name: "windows",
  });
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: (value) => {
      return userLogin(value);
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