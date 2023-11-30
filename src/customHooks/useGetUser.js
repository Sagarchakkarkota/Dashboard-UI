import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../services/axiosInstance";

const useGetUser = () => {
  const getUser = async () => {
    try {
      const response = await axiosInstance.get("/user", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
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
