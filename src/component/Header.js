//import demoImage from "/./images/its-demo.svg";
import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import{Link} from "react-router-dom";
import useConnectionStatus from "../utils/useConnectionStatus";


const Header = () => {
  const [btnNameReact,setbtnNameReact]=useState("Login");
  let btnName="Login";
  const onlineStatus =useConnectionStatus();
    return (
      <div className="header">
        <div>
          <img className="logo" src= {LOGO_URL} />
        </div>
        <div className="nav-item">
          <ul>
          <li>Online Status:{onlineStatus ? "true":"false" }</li>
            <li><Link to="/"> Home</Link></li>
            <li>
              <Link to="/about">
              About us
              </Link>
              </li>
            <li><Link to="/contact">Contact us  </Link></li>
            <li>Cart</li>
            <li><button className="login" onClick={()=>{
              btnName="Logout";
              btnNameReact == "Login"?setbtnNameReact("Logout"):setbtnNameReact("Login")
            }}>{btnNameReact}</button></li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;