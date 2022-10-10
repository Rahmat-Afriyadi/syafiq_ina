import { Link } from "react-scroll";
import NavItem from "./NavItem";

import { faHome, faCalendar, faGift } from "@fortawesome/free-solid-svg-icons";

export default function Navbar(){

    return (
        <div className='h-auto w-full py-5 text-center fixed flex justify-center items-center bottom-0 z-20 overflow-x-hidden'>
          <div className='w-[260px] h-auto bg-purple-400 flex justify-between py-1 px-2 rounded-lg'>
            <NavItem to="home" icon={faHome}/>
            <NavItem to="calendar" icon={faCalendar}/>
            <NavItem to="calendar" icon={faCalendar}/>
            <NavItem to="gift" icon={faGift}/>
            <NavItem to="gift" icon={faGift}/>
          </div>
        </div>
    );
}