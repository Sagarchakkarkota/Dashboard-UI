import { Popover, Transition } from "@headlessui/react";
import HotToast from "src/components/hotToast";
import { GiSettingsKnobs } from "react-icons/gi";
import { IoMdPersonAdd } from "react-icons/io";

const SearchBar = ({ table, filtering, setFiltering, setIsOpen }) => {
  return (
    <div className="w-full flex justify-between items-center bg-primary_color shadow-lg  rounded-md border py-2 px-6 border-gray-200 ">
      <div className="flex flex-row ">
        {" "}
        <input
          type="text"
          value={filtering}
          onChange={(e) => {
            <label htmlFor="">Search</label>;
            setFiltering(e.target.value);
          }}
          placeholder="SearchBar"
          className=" focus:outline-none   duration-200  py-1 px-2 rounded-md"
        />
        <div>
          <button
            className="cursor-pointer bg-primary_color py-2 px-4 mx-2 rounded-md text-background_white active:bg-[#4b436b]"
            onClick={() => setIsOpen(true)}
          >
            <IoMdPersonAdd />
          </button>
          <HotToast />
        </div>
      </div>
      <Popover>
        {({ open }) => (
          <>
            <Popover.Button className="transform rotate-90 border-1 border-transparent text-xl text-background_white outline-none  focus:border-black duration-200 ">
              {" "}
              <GiSettingsKnobs />
            </Popover.Button>

            {/* Use the `Transition` component. */}
            <Transition
              show={open}
              enter="transition duration-300 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
              className="relative"
            >
              {/* Mark this component as `static` */}
              <Popover.Panel className="absolute z-10 bg-[#dbd9d9] text-text_gray  top-[-4px] right-0 rounded-md ">
                <div className="inline-block  w-40 h-50 p-4">
                  {table.getAllLeafColumns().map((column) => {
                    return (
                      <div
                        key={column.id}
                        className="px-1 border border-transparent border-b-text_gray  font-medium "
                      >
                        <input
                          {...{
                            type: "checkbox",
                            checked: column.getIsVisible(),
                            onChange: column.getToggleVisibilityHandler(),
                          }}
                        />
                        <label className="px-2">{column.id}</label>
                      </div>
                    );
                  })}
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
};

export default SearchBar;
