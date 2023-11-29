import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useLogOut = () => {
  const navigate = useNavigate();
  const logOut = async () => {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    const res = await axios.post(
      "https://uatapicorporatetravel.fynity.in/api/logout",
      {},
      { headers: headers }
    );
    return res;
  };

  const removeToken = () => {
    localStorage.removeItem("token");
    return navigate("/login");
  };

  const mutation = useMutation({
    mutationFn: () => {
      return logOut();
    },
    onSuccess: () => {
      removeToken();
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
