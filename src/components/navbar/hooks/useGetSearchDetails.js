import { useState } from "react";
const useGetSearchDetails = () => {
  const [value, setValue] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const filterpage = (pages, value) => {
    return pages.filter((page) => {
      const pageName = page.name.toLowerCase();
      return pageName.includes(value);
    });
  };
  return {
    value,
    setValue,
    filterpage,
    showDropdown,
    setShowDropdown,
  };
};

export default useGetSearchDetails;
