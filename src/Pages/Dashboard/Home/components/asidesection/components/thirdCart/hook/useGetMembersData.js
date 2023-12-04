import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  deleteMember,
  getMember,
} from "../../../../../../../../lib/axios/apiServices/goRestQuery/goRestQuery";
import { useSelector } from "react-redux";
import { useState } from "react";

const useGetMembersData = () => {
  const [value, setValue] = useState([]);
  const isModal = useSelector((state) => state.member.isModal);
  const [isOpen, setIsOpen] = useState(false);
  const queryClient = useQueryClient();

  const { data: getData } = useQuery({
    queryKey: ["member"],
    queryFn: getMember,
    staleTime: 60000,
  });

  const mutation = useMutation({
    mutationFn: (mutateData) => {
      return deleteMember(mutateData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["member"] });
    },
  });

  return {
    getData,
    mutation,
    value,
    setValue,
    isModal,
    isOpen,
    setIsOpen,
  };
};

export default useGetMembersData;
