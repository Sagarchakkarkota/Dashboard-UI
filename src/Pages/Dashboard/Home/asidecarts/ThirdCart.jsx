import React, { useState } from "react";
import ListTeamMember from "../components/ListTeamMember";
import Modal from "../modal/AddMemberModal";
import { useDispatch, useSelector } from "react-redux";
import { setIsModal } from "../MemberSlice";
import { deleteMember } from "../../../../api/api";
import EditModal from "../modal/EditModal";

const ThirdCart = ({ getData }) => {
  const dispatch = useDispatch();
  const [value,setValue]=useState([])
  const isModal = useSelector((state) => state.member.isModal);
  const[isOpen,setIsOpen]=useState(false) 
  const handleEdit = (value) => {
    
    setIsOpen(true)
    setValue(value)
  };
  const handleDelete = (id) => {
    console.log("hello");
    deleteMember(id);
  };

  return (
    <div className="asidebarCard bg-white h-[30%]">
      <h1 className="xlBoldFont">Team Member</h1>
      <div className="h-full overflow-y-scroll ">
        {getData?.map((value) => (
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
        {isOpen && <EditModal isOpen={(isOpen)} setIsOpen={setIsOpen} value={value} />}
        
      </div>
    </div>
  );
};

export default ThirdCart;
