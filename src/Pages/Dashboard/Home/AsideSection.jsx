import { useSelector } from "react-redux";
import ThirdCart from "./asidecarts/ThirdCart";
import FirstCart from "./asidecarts/FirstCart";
import SecondCart from "./asidecarts/SecondCart";
import { getMember } from "../../../api/api";
import { useQuery } from "@tanstack/react-query";

const AsideSection = () => {
  // const getData = useSelector((state) => state.member.totalMembers);
  const { data:getData} = useQuery({
      queryKey: ["member"],
      queryFn: getMember,
      staleTime: 10000,
    });
 
  return (
    <div className="py-8 flex flex-col gap-2  ">
      {/* card 1 start */}
      <FirstCart />
      {/* card 1 end */}

      {/* card 2 start */}
      <SecondCart />
      {/* card 2 end */}

      {/* card 3 start */}
      {/* <div className="asidebarCard bg-white">
        <h1 className="xlBoldFont">Team Member</h1>
        <div>
          {getData.map(({ name, occupation, profilepicture }, index) => (
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
            onClick={openModal}
            className="bg-[#AAC9FF]  p-2 px-2 rounded-2xl w-full"
          >
            Add more member
          </button>
          {isModalOpen && <Modal onClose={closeModal} />}
        </div>
      </div> */}
      <ThirdCart getData={getData} />
      {/* card 3 end */}
    </div>
  );
};

export default AsideSection;
