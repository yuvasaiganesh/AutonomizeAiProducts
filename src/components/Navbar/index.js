import {Link, useNavigate} from "react-router-dom"
import { RiLogoutBoxFill } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";

import Cookies from "js-cookie"
import "./index.css"


const Navbar=()=>{

    const navigate=useNavigate()

    const toLogout = () => {
        Cookies.remove("jwt_token");
        localStorage.removeItem("userName");
        localStorage.removeItem("userId");
        navigate("/login");
      };

    return(
        <>

<div className="navSection1">
      <Link to="/" className="navItems">
      <IoHomeSharp className="navButton" />
        </Link>

        
      
        <Link to="/cart" className="navItems">
        <FaShoppingCart className="navButton" />
        </Link>

         <div className="navItems">
         <RiLogoutBoxFill className="navButton" onClick={toLogout}/>
        </div>

        </div>

     
          </>)

}
export default Navbar