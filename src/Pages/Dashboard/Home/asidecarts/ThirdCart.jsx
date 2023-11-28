import ListTeamMember from "../components/ListTeamMember";
import Modal from "../modal/AddMemberModal";
import { useDispatch, useSelector } from "react-redux";
import { setIsModal } from "../MemberSlice";
import { deleteMember, getMember } from "../../../../api/api";
import EditModal from "../modal/EditModal";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ThirdCart = ({ ID }) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { data: getData } = useQuery({
    queryKey: ["member"],
    queryFn: getMember,
    staleTime: 60000,
  });

  const filteredData = getData?.filter((item) => item.id != ID);

  const dispatch = useDispatch();
  const [value, setValue] = useState([]);
  const isModal = useSelector((state) => state.member.isModal);
  const [isOpen, setIsOpen] = useState(false);
  const mutation = useMutation({
    mutationFn: (mutateData) => {
      return deleteMember(mutateData);
    },
    onSuccess: () => {
      // const membersData = queryClient.getQueryData(["member"]);

      // const singleMemberIndex = membersData.indexOf((item) => {
      //   return item.id == ID;
      // });

      // const nextMemberData = membersData[singleMemberIndex + 2];

      queryClient.invalidateQueries({ queryKey: ["member"] });
      // navigate(`/members/${nextMemberData.id}`);
    },
  });

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
