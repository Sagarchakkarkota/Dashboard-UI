import { useState } from "react";

const useGetTableDetails = () => {
  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState("");
  const [columnVisibility, setColumnVisibility] = useState({});

  return {
    sorting,
    setSorting,
    filtering,
    setFiltering,
    columnVisibility,
    setColumnVisibility,
  };
};

export default useGetTableDetails;
