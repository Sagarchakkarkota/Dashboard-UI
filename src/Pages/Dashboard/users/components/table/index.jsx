import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  IoIosArrowDown,
  IoIosArrowRoundBack,
  IoIosArrowRoundForward,
  IoIosArrowUp,
} from "react-icons/io";
import useGetTableDetails from "./hooks/useGetTableDetails";

import EditDelete from "./components/editDelete";
import SearchBar from "./components/searchbar";
import Table from "./components/tableComp";
const UserPage = ({ updatedData, handleEdit, handleDelete, setIsOpen }) => {
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
      header: "#",
      cell: ({ row }) => {
        return row.index + 1;
      },
    },

    {
      header: "Name",
      cell: ({ row }) => {
        return (
          <div className="flex jutify-center items-center pr-4">
            <img
              src={row.original.photo}
              className="h-8 w-8 rounded-2xl pr-1"
              alt="User"
            />
            <div>{row.original.name}</div>
          </div>
        );
      },
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
        <a
          className="text-primary_color whitespace-pre-wrap "
          href="https://www.google.co.in/"
        >
          {info.getValue()}
        </a>
      ),
    },

    {
      header: "edit",
      cell: ({ row }) => {
        return (
          <EditDelete
            row={row}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        );
      },
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
        pageSize: 8,
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
    <div className=" w-full p-6 ">
      {/* SearchBar start */}
      <SearchBar
        table={table}
        filtering={filtering}
        setFiltering={setFiltering}
        setIsOpen={setIsOpen}
      />
      {/* Table start */}
      <Table table={table} flexRender={flexRender} />
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

export default UserPage;
