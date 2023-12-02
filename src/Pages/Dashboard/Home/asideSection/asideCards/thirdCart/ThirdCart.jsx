import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteMember,
  getMember,
} from "../../../../apiServices/goRestQuery/goRestQuery";
import { setIsModal } from "../../../MemberSlice";
import ListTeamMember from "../../../components/listTeamMember/ListTeamMember";
import Modal from "../../../components/modal/AddMemberModal";
import EditModal from "../../../components/modal/EditModal";
import useGetMembersData from "./hook/useGetMembersData";

const ThirdCart = ({ ID }) => {
  const dispatch = useDispatch();

  const { getData, mutation, value, setValue, isModal, isOpen, setIsOpen } =
    useGetMembersData();

  const filteredData = getData?.filter((item) => item.id != ID);

  const handleEdit = (value) => {
    setIsOpen(true);
    setValue(value);
  };

  const handleDelete = (id) => {
    mutation.mutate(id);
  };

  return (
    <div className="asidebarCard bg-white h-[400px]">
      <h1 className="xlBoldFont">Team Member</h1>
      <div className="h-full overflow-y-scroll ">
        {ID
          ? filteredData?.map((value) => (
              <ListTeamMember
                key={value.id}
                value={value}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            ))
          : getData?.map((value) => (
              <ListTeamMember
                key={value.id}
                value={value}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            ))}
      </div>
      <div className="App">
        <button
          onClick={() => dispatch(setIsModal(true))}
          className="bg-[#5372aa]  p-2 px-2 rounded-2xl w-full"
        >
          Add more member
        </button>
        {isModal && <Modal />}
        {isOpen && (
          <EditModal isOpen={isOpen} setIsOpen={setIsOpen} value={value} />
        )}
      </div>
    </div>
  );
};

export default ThirdCart;
