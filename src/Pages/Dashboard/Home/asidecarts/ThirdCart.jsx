import React from "react";
import ListTeamMember from "../components/ListTeamMember";
import Modal from "../modal/AddMemberModal";
import { useDispatch, useSelector } from "react-redux";
import { setIsModal } from "../MemberSlice";

const ThirdCart = ({ getData }) => {
  const dispatch = useDispatch();
  const isModal = useSelector((state) => state.member.isModal);
  return (
    <div className="asidebarCard bg-white">
      <h1 className="xlBoldFont">Team Member</h1>
      <div>
        {getData?.map(({ name, occupation, profilepicture }, index) => (
          <ListTeamMember
            key={index}
            index={index}
            profile={profilepicture}
            name={name}
            occupation={occupation}
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
      </div>
    </div>
  );
};

export default ThirdCart;
