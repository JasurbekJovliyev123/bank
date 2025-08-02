import { GoHome } from "react-icons/go";
import {HiOutlineShoppingBag } from "react-icons/hi"
import { TiCreditCard } from "react-icons/ti";
import { PiChatTeardropDots } from "react-icons/pi";
import { RiFileHistoryLine } from "react-icons/ri";
const Sidebar = () => {
    return (
        <footer className="flex justify-around py-6 bg-[#242325] left-0  fixed bottom-0 w-full rounded-t-2xl">
            <GoHome className="text-white w-6 h-6" />
            <HiOutlineShoppingBag className="text-white w-6 h-6" />
            <TiCreditCard className="text-white w-6 h-6"/>
            <PiChatTeardropDots className="text-white w-6 h-6"/>
            <RiFileHistoryLine className="text-white w-6 h-6"/>
        </footer>
    )
}

export default Sidebar