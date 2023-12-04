import { useQuery } from "@tanstack/react-query";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useGetUser from "../../customHooks/useGetUser";

const ProtectedRoute = ({ children }) => {
  const { service } = useGetUser();

  const navigate = useNavigate();
  useEffect(() => {
    if (service.isLoading) return () => {};
    if (service.status == "error") {
      navigate("/login");
    } else {
      navigate("/");
    }
  }, [service.status, service.isLoading]);

  if (service.isLoading) {
    return <div>loading.....</div>;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
