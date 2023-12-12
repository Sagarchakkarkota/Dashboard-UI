import React from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Table = ({ table, flexRender }) => {
  return (
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
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
