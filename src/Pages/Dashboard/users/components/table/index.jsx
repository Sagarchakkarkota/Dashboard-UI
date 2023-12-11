import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";

import { HiDotsVertical } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { GiSettingsKnobs } from "react-icons/gi";
import { Popover, Transition } from "@headlessui/react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import useGetTableDetails from "./hooks/useGetTableDetails";
import { useQuery } from "@tanstack/react-query";
import { getMember } from "src/lib/axios/apiServices/goRestQuery/goRestQuery";

const Table = ({ updatedData, handleEdit }) => {
  const {
    sorting,
    setSorting,
    filtering,
    setFiltering,
    columnVisibility,
    setColumnVisibility,
  } = useGetTableDetails();

  const tableColumns = [
    {
      header: "ID",
      accessorKey: "id",
    },

    {
      header: "Name",
      accessorKey: "name",
    },
    {
      header: "Username",
      accessorKey: "username",
    },
    {
      header: "Email",
      accessorKey: "email",
    },
    {
      header: "Phone",
      accessorKey: "phone",
    },

    {
      header: "Website",
      accessorKey: "website",
      cell: (info) => (
        <a className="text-primary_color " href="https://www.google.co.in/">
          {info.getValue()}
        </a>
      ),
    },

    {
      header: "Edit",
      cell: ({ row }) => (
        <button onClick={() => handleEdit(row.original)}>
          {/* <HiDotsVertical /> */}
          Edit
        </button>
      ),
    },
  ];

  const table = useReactTable({
    data: updatedData,
    columns: tableColumns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    initialState: {
      pagination: {
        pageSize: 5,
      },
    },
    state: {
      sorting: sorting,
      globalFilter: filtering,
      columnVisibility: columnVisibility,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
    onColumnVisibilityChange: setColumnVisibility,
  });
  const paginationState = table.getState();
  return (
    <div className=" w-full p-6">
      {/* SearchBar start */}
      <div className="w-full flex justify-between items-center bg-primary_color shadow-lg  rounded-md border py-2 px-6 border-gray-200 ">
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
      {/* Table start */}
      <table className="w-full  my-4 shadow-md  bg-background_white  ">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => {
            return (
              <tr
                key={headerGroup.id}
                className="border boder-gray-300 rounded-sm bg-[#dbd9d9] "
              >
                {headerGroup.headers.map((header) => {
                  return (
                    <th
                      className="p-2 text-md text-[#616161] font-medium"
                      key={header.id}
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      {header.isPlaceholder ? null : (
                        <div className="flex flex-row   ">
                          <div className="">
                            {" "}
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                          </div>
                          <div className="p-1">
                            {
                              {
                                asc: <IoIosArrowUp />,
                                desc: <IoIosArrowDown />,
                              }[header.column.getIsSorted() ?? null]
                            }
                          </div>
                        </div>
                      )}
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
        <tbody className="text-sm">
          {table?.getRowModel().rows.map((row) => {
            return (
              <tr key={row.id} className={`p-2 `}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td key={cell.id} className="p-2 ">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="w-full flex justify-end  ">
        <button
          className="border border-transparent  cursor-pointer hover:border-primary_color active:bg-primary_color disabled:border-background_white disabled:bg-background_white  disabled:cursor-not-allowed  mx-2 rounded-[30px]  p-2 duration-500 "
          disabled={!table.getCanPreviousPage()}
          onClick={() => {
            table.previousPage();
          }}
        >
          <IoIosArrowRoundBack />
        </button>
        <div className="text-sm p-2">
          {paginationState.pagination.pageIndex + 1}/{table.getPageCount()}
        </div>
        <button
          className="border  border-transparent cursor-pointer  hover:border-primary_color active:bg-primary_color disabled:border-background_white disabled:bg-background_white disabled:cursor-not-allowed mx-2 rounded-[30px]  p-2  duration-500 "
          disabled={!table.getCanNextPage()}
          onClick={() => {
            table.nextPage();
          }}
        >
          <IoIosArrowRoundForward />
        </button>
      </div>
    </div>
  );
};

export default Table;
