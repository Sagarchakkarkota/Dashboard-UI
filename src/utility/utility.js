import { BiSolidDashboard } from "react-icons/bi";
import { BsFileBarGraph } from "react-icons/bs";
import { FcStatistics } from "react-icons/fc";
import { GrTransaction } from "react-icons/gr";
import { IoMdSettings } from "react-icons/io";
import { RiTeamFill } from "react-icons/ri";

export const pages = [
  { id: 1, icon: BiSolidDashboard, name: "Dashboard", path: "/" },
  { id: 2, icon: FcStatistics, name: "Statistics", path: "/statistics" },
  { id: 3, icon: GrTransaction, name: "Transaction", path: "/transaction" },
  { id: 4, icon: RiTeamFill, name: "Users", path: "/users" },
  { id: 5, icon: BsFileBarGraph, name: "Sell Reports", path: "/sellreports" },
  { id: 6, icon: IoMdSettings, name: "Settings", path: "/settings" },
];
