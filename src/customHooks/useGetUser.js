import { useQuery } from "@tanstack/react-query";
import { getUser } from "../api/api";

const useGetUser = () => {
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
