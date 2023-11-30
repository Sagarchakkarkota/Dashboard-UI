import { useMutation } from "@tanstack/react-query";
import axios from "axios";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useLogIn = () => {
  const [value, setValue] = useState({
    email: "",
    password: "",
    device_name: "windows",
  });
  const navigate = useNavigate();

  const getLogin = async (value) => {
    try {
      const headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
      };

      const res = await axios.post(
        "https://uatapicorporatetravel.fynity.in/api/login",
        value,
        { headers: headers }
      );
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
