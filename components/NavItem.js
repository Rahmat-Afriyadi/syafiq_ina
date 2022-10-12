import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavItem({to, icon}) {

    return (
        
        <Link
            to={to}
            smooth={true}
            className='h-10 w-10 bg-red-200 rounded-md hover:bg-gray-800 flex items-center justify-center'>
              <FontAwesomeIcon icon={icon} style={{fontSize:25, color:"salmon"}}/>
        </Link>
    );
}