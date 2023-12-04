import { AiFillMessage } from "react-icons/ai";
import { TbBellMinusFilled } from "react-icons/tb";
import profilepic from "../../assets/profile.jpg";
import useGetUser from "../../customHooks/useGetUser";
import useGetSearchDetails from "./hooks/useGetSearchDetails";
import { pages } from "../../utility/utility";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
const Navbar = () => {
  const navigate = useNavigate();

  const { value, setValue, filterpage, showDropdown, setShowDropdown } =
    useGetSearchDetails();
  const { service } = useGetUser();
  const userData = service?.data || {};
  const filteredPages = filterpage(pages, value);

  const handleChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const handleSearch = () => {
    navigate(`/${value}`);
    setShowDropdown(false);
  };
  const handlePath = (value) => {
    setValue(value);
    navigate(`/${value}`);
    setShowDropdown(false);
  };

  return (
    <div className=" h-[100px]   w-full flex flex-row px-14 py-4 items-center  ">
      <div className="text-2xl font-bold h-[80%]">
        Dashboard
        <p className="text-sm text-gray-500">14th Aug 2023</p>
      </div>

      {/* searchbar */}
      <div className="  px-4 flex-grow h-[80%] flex items-center  relative">
        <input
          type="text"
          autoComplete="off"
          placeholder="search"
          name="search"
          id="search"
          onFocus={() => {
            setShowDropdown(true);
          }}
          value={value}
          onChange={handleChange}
          className="border border-gray-600 w-full rounded-l-md px-4 py-1"
        />
        <div className=" border border-gray-600  rounded-r-md px-2 py-1 hover:bg-black hover:text-white cursor-pointer">
          <button type="submit" onClick={handleSearch} className="w-full">
            <FaSearch />
          </button>
        </div>

        {showDropdown && (
          <ul className="absolute top-11 bg-white p-3 rounded-b-md">
            {filteredPages.map(({ id, name }) => {
              return (
                <li
                  key={id}
                  onClick={() => {
                    handlePath(name);
                  }}
                  className="cursor-pointer hover:bg-gray-300 hover:border-b-black "
                >
                  {name}
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <div className="flex h-[80%] text-gray-500 gap-2 py-2">
        <div className=" p-2 flex items-center text-2xl border-[1px] border-gray-500 rounded-md">
          <AiFillMessage />
        </div>
        <div className=" p-2 flex items-center text-2xl border-[1px] border-gray-500  rounded-md">
          <TbBellMinusFilled />
        </div>

        <div className="flex justify-center items-center px-2 gap-1">
          <div className="w-full flex justify-center ">
            <img className="rounded-[30px] h-[40px]" src={profilepic} alt="" />
          </div>
          <div className="px-2">
            <h1 className="w-full flex justify-center text-md font-bold whitespace-nowrap  ">
              {userData?.name}
            </h1>
            <p className="w-full flex justify-center text-xs text-gray-500 whitespace-nowrap ">
              {userData?.email}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
