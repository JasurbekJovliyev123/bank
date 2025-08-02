import { GoHome } from "react-icons/go";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { TiCreditCard } from "react-icons/ti";
import { PiChatTeardropDots } from "react-icons/pi";
import { RiFileHistoryLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <footer className="flex justify-around py-6 z-0 bg-[#242325] left-0 fixed bottom-0 w-full rounded-t-2xl">
      <NavLink
        to="/"
        className={({ isActive }) => isActive ? "text-[#F2FE8D]" : "text-white"}
      >
        <GoHome className="w-6 h-6" />
      </NavLink>

      <HiOutlineShoppingBag className="text-white w-6 h-6" />

      <NavLink
        to="/cards"
        className={({ isActive }) => isActive ? "text-[#F2FE8D]" : "text-white"}
      >
        <TiCreditCard className="w-6 h-6" />
      </NavLink>

      <PiChatTeardropDots className="text-white w-6 h-6" />

      <RiFileHistoryLine className="text-white w-6 h-6" />
    </footer>
  );
};

export default Sidebar;
