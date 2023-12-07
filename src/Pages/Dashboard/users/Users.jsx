// const Users = () => {

//   return (
//
//
//     </div>
//     </div>
//   );
// };

// export default Users;

import { useQuery } from "@tanstack/react-query";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import React, { useMemo, useState } from "react";
import { getUsers } from "src/lib/axios/apiServices/goRestQuery/goRestQuery";
import { HiDotsVertical } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { GiSettingsKnobs } from "react-icons/gi";
import { Popover, Transition } from "@headlessui/react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import SideBar from "../../../components/sidebar/SideBar";

const dataList = [
  {
    id: 1,
    name: "Rishabh",
    email: "test@gmail.com",
    phone: "899456870596",
    username: "rishabh",
    website: "www.test.com",
  },
  {
    id: 2,
    name: "Sagar",
    email: "saagr@gmail.com",
    phone: "9638527415",
    username: "sagar",
    website: "www.developer.com",
  },
  {
    id: 3,
    name: "Pavan",
    email: "pavan@gmail.com",
    phone: "788589964522",
    username: "pavan",
    website: "www.dev.com",
  },
  {
    id: 4,
    name: "Kunal",
    email: "kunal@gmail.com",
    phone: "0456451115",
    username: "kunal",
    website: "www.kkk.com",
  },
  {
    id: 5,
    name: "Pavan",
    email: "pavan@gmail.com",
    phone: "788589964522",
    username: "pavan",
    website: "www.dev.com",
  },
  {
    id: 6,
    name: "Kunal",
    email: "kunal@gmail.com",
    phone: "0456451115",
    username: "kunal",
    website: "www.kkk.com",
  },
  {
    id: 7,
    name: "Pavan",
    email: "pavan@gmail.com",
    phone: "788589964522",
    username: "pavan",
    website: "www.dev.com",
  },
  {
    id: 8,
    name: "Kunal",
    email: "kunal@gmail.com",
    phone: "0456451115",
    username: "kunal",
    website: "www.kkk.com",
  },

  {
    id: 9,
    name: "Kunal",
    email: "kunal@gmail.com",
    phone: "0456451115",
    username: "kunal",
    website: "www.kkk.com",
  },
  {
    id: 10,
    name: "Pavan",
    email: "pavan@gmail.com",
    phone: "788589964522",
    username: "pavan",
    website: "www.dev.com",
  },
  {
    id: 11,
    name: "Kunal",
    email: "kunal@gmail.com",
    phone: "0456451115",
    username: "kunal",
    website: "www.kkk.com",
  },
  {
    id: 12,
    name: "Pavan",
    email: "pavan@gmail.com",
    phone: "788589964522",
    username: "pavan",
    website: "www.dev.com",
  },
  {
    id: 13,
    name: "Kunal",
    email: "kunal@gmail.com",
    phone: "0456451115",
    username: "kunal",
    website: "www.kkk.com",
  },
  {
    id: 14,
    name: "Pavan",
    email: "pavan@gmail.com",
    phone: "788589964522",
    username: "pavan",
    website: "www.dev.com",
  },

  {
    id: 15,
    name: "Kunal",
    email: "kunal@gmail.com",
    phone: "0456451115",
    username: "kunal",
    website: "www.kkk.com",
  },
];

const Users = () => {
  // const {  isLoading } = useQuery({
  //   queryKey: ["users"],
  //   queryFn: getUsers,
  //   staleTime: 10000,
  // });
  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState("");
  const [columnVisibility, setColumnVisibility] = useState({});

  const tableColumns = [
    {
      header: "ID",
      accessorKey: "id",
    },
    // {
    //   header: "Name",
    //   accessorFn: (row) => `${row.name} ${row.username}`,
    // },
    // {
    //   header: "Name",
    //   columns: [
    //     {
    //       header: "Name",
    //       accessorKey: "name",
    //     },
    //     {
    //       header: "Username",
    //       accessorKey: "username",
    //     },
    //   ],
    // },
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
      cell: (info) => <a href="https://www.google.co.in/">{info.getValue()}</a>,
    },

    {
      header: "Edit",
      cell: ({ row }) => (
        <button onClick={() => alert(JSON.stringify(row.original))}>
          <HiDotsVertical />
        </button>
      ),
    },
  ];

  const table = useReactTable({
    data: dataList,
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
    <div className="flex lg:h-screen  bg-gradient-to-br  to-[#f1e8b1] w-full">
      <div className="flex w-full ">
        <SideBar />
        <div className=" w-full p-6">
          {/* SearchBar start */}
          <div className="w-full flex justify-between items-center rounded-md border p-2 border-gray-200">
            <input
              type="text"
              value={filtering}
              onChange={(e) => {
                <label htmlFor="">Search</label>;
                setFiltering(e.target.value);
              }}
              placeholder="SearchBar"
              className="border boder-gray-300  focus:outline-none "
            />
            <Popover>
              {({ open }) => (
                <>
                  <Popover.Button>
                    {" "}
                    <div className="transform rotate-90">
                      <GiSettingsKnobs />
                    </div>
                  </Popover.Button>

                  {/* Use the `Transition` component. */}
                  <Transition
                    show={open}
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                    className="relative"
                  >
                    {/* Mark this component as `static` */}
                    <Popover.Panel className="absolute z-10 bg-white top-[-4px] right-0 ">
                      <div className="inline-block border border-rounded w-40 h-50 p-4">
                        {table.getAllLeafColumns().map((column) => {
                          return (
                            <div
                              key={column.id}
                              className="px-1 border border-b-gray-200"
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
          <table className="w-full border boder-gray-300 bg-gray-200 my-4 ">
            <thead>
              {table.getHeaderGroups().map((headerGroup) => {
                return (
                  <tr key={headerGroup.id} className="border boder-gray-300 ">
                    {headerGroup.headers.map((header) => {
                      return (
                        <th
                          className="p-2 "
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
                  <tr key={row.id} className="border boder-gray-300  ">
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
          <div className="w-full flex justify-end ">
            <button
              className="border border-black px-2 mx-1 rounded-sm "
              disabled={!table.getCanPreviousPage()}
              onClick={() => {
                table.previousPage();
              }}
            >
              <IoIosArrowRoundBack />
            </button>
            {paginationState.pagination.pageIndex + 1}/{table.getPageCount()}
            <button
              className="border border-black px-2 mx-1 rounded-sm"
              disabled={!table.getCanNextPage()}
              onClick={() => {
                table.nextPage();
              }}
            >
              <IoIosArrowRoundForward />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
