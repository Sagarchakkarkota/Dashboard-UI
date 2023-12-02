import { useState } from "react";

const useGetFilteredPeople = () => {
  const [selected, setSelected] = useState(getData[0]);
  const [query, setQuery] = useState("");

  const filteredPeople =
    query === ""
      ? getData
      : getData?.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );
  return {
    selected,
    setSelected,
    query,
    setQuery,
    filteredPeople,
  };
};

export default useGetFilteredPeople;
