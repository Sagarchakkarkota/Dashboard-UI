import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { pages } from "src/utility/utility";

const useGetSearchDetails = () => {
  const manageKeyRef = useRef(null);

  const navigate = useNavigate();
  const [value, setValue] = useState("");

  const [selected, setSelected] = useState(pages[0].name)


  const filteredItems =
  value === ''
      ? pages
      : pages.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(value.toLowerCase().replace(/\s+/g, ''))
        )
  const handlePath = (path) => {
    navigate(path);
  };

  return {
    filteredItems,
    handlePath,
    manageKeyRef,
    setValue,
    value,
    selected, setSelected
  };
};

export default useGetSearchDetails;
