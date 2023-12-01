import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { userLogOut } from "../Pages/Dashboard/Login/authQueries";

const useLogOut = () => {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: userLogOut,
    onSuccess: () => {
      localStorage.removeItem("token");
      navigate("/login");
    },
  });

  const handleLogout = () => {
    mutation.mutate();
  };
  return {
    handleLogout,
  };
};

export default useLogOut;
