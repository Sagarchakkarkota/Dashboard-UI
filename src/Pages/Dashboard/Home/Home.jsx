import MainSection from "./mainsection/MainSection";
import AsideSection from "./asideSection/AsideSection";
import Navbar from "../../../components/Navbar";
import SideBar from "../../../components/sidebar/SideBar";

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
