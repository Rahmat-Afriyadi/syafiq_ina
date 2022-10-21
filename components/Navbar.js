import NavItem from "./NavItem";
import { Tooltip, Button } from "@material-tailwind/react";

import { faHome, faCalendar, faGift, faUserFriends, faBookOpen } from "@fortawesome/free-solid-svg-icons";

export default function Navbar(){

    return (
        <div className='h-auto w-full py-4 text-center fixed flex justify-center items-center bottom-0 z-20 overflow-x-hidden'>
          <div className='w-[260px] h-[55px] bg-purple-400 flex justify-between items-center py-0 px-2 rounded-lg'>
            <Tooltip 
              className="h-[39px] m-auto text-md flex items-center justify-center bg-pink-500 z-20"
              content="Home" 
              placement="top" 
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
            }}>
              <Button variant="text" size="md" ripple={true}>
                <NavItem to="home" icon={faHome}/>

              </Button>
            </Tooltip>
            <Tooltip 
              className="h-[39px] m-auto text-md flex items-center justify-center bg-pink-500 z-20"
              content="Couple" 
              placement="top" 
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
            }}>
              <Button variant="text" size="md" ripple={true}>
                <NavItem to="couple" icon={faUserFriends}/>
              </Button>
            </Tooltip>
            <Tooltip 
              className="h-[39px] m-auto text-md flex items-center justify-center bg-pink-500 z-20"
              content="Calendar" 
              placement="top" 
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
            }}>
              <Button variant="text" size="md" ripple={true}>
                <NavItem to="calendar" icon={faCalendar}/>
              </Button>
            </Tooltip>
            <Tooltip 
              className="h-[39px] m-auto text-md flex items-center justify-center bg-pink-500 z-20"
              content="Galery" 
              placement="top" 
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
            }}>
              <Button variant="text" size="md" ripple={true}>
                <NavItem to="gallery" icon={faBookOpen}/>
              </Button>
            </Tooltip>
            <Tooltip 
              className="h-[39px] m-auto text-md flex items-center justify-center bg-pink-500 z-20"
              content="Gift" 
              placement="top" 
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
            }}>
              <Button variant="text" size="md" ripple={true}>
                <NavItem to="gift" icon={faGift}/>
              </Button>
            </Tooltip>           
            
          </div>
        </div>
    );
}