import React from "react";
import Cart from "../../../Components/Cart";
import { VscGraph } from "react-icons/vsc";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Table from "./Table";
import SymbolButton from "./components/SymbolButton";

const MainSection = () => {
  const cartItems = [
    {
      bgcolor: "#CDC3FF",
      title: "Total Earning",
      number: "242.65K",
      description: "From the running month",
    },
    {
      bgcolor: "#AAC9FF",
      title: "Average Earning",
      number: "17.347k",
      description: "Daily Earning of this month",
    },
    {
      bgcolor: "#8FE3B8",
      title: "Conversation Rate",
      number: "74.86%",
      description: "+6.04% greater that last month",
    },
  ];
  return (
    <div className="  p-5 ">
      {/* cart start */}
      <div className=" flex  lg:items-center justify-start   gap-2 lg:flex-wrap">
        {cartItems.map(({ bgcolor, title, number, description }, index) => (
          <div key={index}>
            <Cart
              bgcolor={bgcolor}
              title={title}
              number={number}
              month={description}
            />
          </div>
        ))}
      </div>
      {/* cart end */}
      {/* sales analysis start */}
      <div className="flex   flex-row  lg:justify-between  my-4 w-full">
        <div className=" bg-white p-3 rounded-3xl flex flex-col justify-between">
          <div className="flex justify-between ">
            <p className="xlBoldFont">Regular Sell</p>
            <p className="bg-button_green px-2 rounded-lg">Export</p>
          </div>

          <img
            className="h-[300px] w-[450px]"
            src="https://d138zd1ktt9iqe.cloudfront.net/media/seo_landing_files/bar-graph-example1-1622649435.png"
            alt=""
          />
        </div>

        <div className="display flex flex-col justify-between mx-auto px-[5px] py-[60px] gap-5 lg:px-1 lg:[10px] ">
          <div className="flex flex-col items-center">
            <h1 className="xlBoldFont whitespace-nowrap ">More Analysis</h1>
            <p className="text-md text-gray-500 whitespace-nowrap">
              There are more to view
            </p>
          </div>
          <div className="flex flex-col items-center">
            <SymbolButton
              symbol={<VscGraph />}
              name="Store Sell Ratio"
              arrow={<MdOutlineKeyboardArrowRight />}
            />
            <SymbolButton
              symbol={<VscGraph />}
              name="Store Sell Ratio"
              arrow={<MdOutlineKeyboardArrowRight />}
            />
          </div>

          <div className="flex gap-2">
            <p className="text-sm font-semibold">Analysis created by</p>
            <span className=" text-sm bg-button_green px-1 rounded-[30px]">
              N
            </span>
          </div>
        </div>
      </div>
      {/* sales analysis end */}
      {/* table start */}
      <div className="bg-white  rounded-3xl">
        <Table data={"data"} headers={"header"} />
      </div>
      {/* table start */}
    </div>
  );
};

export default MainSection;
