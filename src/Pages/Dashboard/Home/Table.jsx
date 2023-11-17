const Table = () => {
  const headers = ["Start Name", "Location", "Sell", "Amount"];

  const data = [
    {
      name: "Solaris Sparkle",
      location: "miami, Florida",
      sell: "102Qua",
      Amount: "12.50k",
    },
    {
      name: "Crimson Dusk ",
      location: "Mumai",
      sell: "103Qua",
      Amount: "150k",
    },
    { name: "Indigo Zephyr", location: "mia", sell: "104Qua", Amount: "120k" },
    {
      name: "Roseate Crest",
      location: "Florida",
      sell: "105Qua",
      Amount: "150k",
    },
  ];

  return (
    <div className="overflow-x-auto rounded-2xl p-3">
      <div className="flex justify-between ">
        <p className="xlBoldFont">Top Score</p>
        <p className="bg-button_green px-2 rounded-lg">Share</p>
      </div>
      <div className="bg-white  my-6">
        <div className="grid grid-cols-4 px-4 border-b border-gray-300 ">
          {headers.map((header, index) => (
            <div
              key={index}
              className=" flex justify-center px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
            >
              {header}
            </div>
          ))}
        </div>

        {data.map((item, index) => (
          <div
            key={index}
            className={`
            "bg-gray-200  grid grid-cols-4 px-6 py-4 text-sm text-gray-900`}
          >
            <div className="flex justify-center font-semibold">{item.name}</div>
            <div className="flex justify-center">{item.location}</div>
            <div className="flex justify-center">{item.sell}</div>
            <div className="flex justify-center">{item.Amount}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
