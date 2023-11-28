import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useGetUser = () => {
  const getLogin = async () => {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };

    const res = await axios(
      "https://uatapicorporatetravel.fynity.in/api/user",

      { headers: headers }
    );

    return res.data.data;
  };

  const { data: userData } = useQuery({
    queryKey: ["loginUser"],
    queryFn: getLogin,
  });

  return {
    userData,
  };
};

export default useGetUser;
