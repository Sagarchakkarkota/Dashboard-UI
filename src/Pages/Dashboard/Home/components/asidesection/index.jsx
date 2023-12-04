import FirstCart from "./components/firstCart/FirstCart";
import SecondCart from "./components/secondCart/SecondCart";
import ThirdCart from "./components/thirdCart/ThirdCart";

const AsideSection = () => {
  return (
    <div className="py-8 flex flex-col gap-2  ">
      {/* card 1 start */}
      <FirstCart />
      {/* card 1 end */}

      {/* card 2 start */}
      <SecondCart />
      {/* card 2 end */}

      {/* card 3 start */}

      <ThirdCart />
      {/* card 3 end */}
    </div>
  );
};

export default AsideSection;
