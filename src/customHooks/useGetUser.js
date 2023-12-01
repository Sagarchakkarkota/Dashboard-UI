import { useQuery } from "@tanstack/react-query";
import { getUser } from "../Pages/Dashboard/Login/authQueries";

const useGetUser = () => {
  console.log("asdsdad");
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
