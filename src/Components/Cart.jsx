import React from "react";

const Cart = ({ title, month, number, bgcolor }) => {
  const divStyle = {
    backgroundColor: bgcolor,
  };
  return (
    <div
      className="xl:w-[180px] w-[250px]   h-[130px]  rounded-lg p-2 flex flex-col  gap-6 mx-2 "
      style={divStyle}
    >
      <h4 className="text-sm ">{title}</h4>
      <div className="px-5">
        <h1 className="text-xl font-semibold flex justify-center ">{number}</h1>
        <p className="text-xs  flex justify-center ">{month}</p>
      </div>
    </div>
  );
};

export default Cart;
