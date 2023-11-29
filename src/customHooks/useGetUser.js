import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useGetUser = () => {
  const getUser = async () => {
    try {
      const headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      };

      const response = await axios.get(
        "https://uatapicorporatetravel.fynity.in/api/user",
        { headers }
      );

      return response.data.data;
    } catch (error) {
      throw new Error("Failed to fetch user data");
    }
  };

  const service = useQuery({
    queryKey: ["getUser"],
    queryFn: getUser,
    retry: 0,
  });

  return {
    service,
  };
};

export default useGetUser;
