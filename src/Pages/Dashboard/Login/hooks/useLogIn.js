import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../../../lib/axios/apiServices/logQuery/authQueries";
import { setAuthToken } from "../../../../lib/axios/logApi";

const useLogIn = () => {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: (value) => {
      return userLogin(value);
    },
    onSuccess: (data) => {
      setAuthToken(data?.data?.token);
      localStorage.setItem("token", data?.data?.token);
      navigate("/");
    },
  });

  return {
    mutation,
  };
};

export default useLogIn;
