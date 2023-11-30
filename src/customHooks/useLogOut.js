import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../services/axiosInstance";

const useLogOut = () => {
  const navigate = useNavigate();
  const logOut = async () => {
    const res = await axiosInstance.post(
      "/logout",
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return res;
  };

  const mutation = useMutation({
    mutationFn: logOut,
    onSuccess: () => {
      localStorage.removeItem("token");
      navigate("/login");
    },
  });

  const handleLogout = () => {
    mutation.mutate();
  };
  return {
    logOut,
    handleLogout,
  };
};

export default useLogOut;
