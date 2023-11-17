import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { VscGraph } from "react-icons/vsc";

const SymbolButton = ({ symbol, name, arrow }) => {
  return (
    <div className="w-[200px] flex justify-between items-center bg-white my-2 p-3 rounded-md">
      <div className="flex items-center gap-2">
        {symbol}
        <p>{name}</p>
      </div>
      {arrow}
    </div>
  );
};

export default SymbolButton;
