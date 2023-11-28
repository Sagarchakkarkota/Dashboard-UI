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
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    const res = await axios.post(
      "https://uatapicorporatetravel.fynity.in/api/login",
      value,
      { headers: headers }
    );
    const response = res?.data;
    if (response.token) {
      localStorage.setItem("token", response.token);
      navigate("/");
    }
  };

  return {
    getLogin,
    value,
    setValue,
  };
};

export default useLogIn;

// const { data } = useQuery({
//   queryKey: ["loginUser"],
//   queryFn: getLogin,
//   onSuccess: () => {
//     localStorage.setItem("token", data.token);
//     console.log(data.token);
//     navigate("/");
//   },
// });
