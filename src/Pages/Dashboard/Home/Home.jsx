import MainSection from "./MainSection";
import AsideSection from "./AsideSection";
import Navbar from "../Navbar";
import SideBar from "../SideBar";

const Home = () => {
  return (
    <div className="flex  bg-gradient-to-b from-gray-100 to-gray-white">
      <SideBar /> {/* taken 240px */}
      <div className="  w-full ">
        <Navbar />

        <div className="w-full flex justify-evenly">
          <MainSection />
          <AsideSection />
        </div>
      </div>
    </div>
  );
};

export default Home;
