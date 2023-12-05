// import { useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { pages } from "src/utility/utility";

// const useGetSearchDetails = () => {
//   const keyRef = useRef("");
//   const navigate = useNavigate();
//   const [value, setValue] = useState("");
//   const [isOpen, setIsOpen] = useState(false);

//   const filteredPeople = pages.filter((person) => {
//     return person.name.toLowerCase().includes(value.toLowerCase());
//   });

//   const handlePath = (name) => {
//     navigate(`/${name}`);
//   };
//   const handleClick = () => {
//     navigate(`/${value}`);
//   };
//   return {
//     filteredPeople,
//     handlePath,
//     handleClick,
//     keyRef,
//     setValue,
//     isOpen,
//     setIsOpen,
//   };
// };

// export default useGetSearchDetails;

import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { pages } from "src/utility/utility";

const useGetSearchDetails = () => {
  const manageKeyRef = useRef(null);

  const navigate = useNavigate();
  const [value, setValue] = useState("");

  const filteredPeople = pages.filter((person) => {
    return person.name.toLowerCase().includes(value.toLowerCase());
  });

  const handlePath = (path) => {
    navigate(path);
  };

  return {
    filteredPeople,
    handlePath,
    manageKeyRef,
    setValue,
  };
};

export default useGetSearchDetails;
