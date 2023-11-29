// Write all the code here
//import {FaBars} from "react-icons/fa";
import DropdownMenu from "./DropdownMenu";
import burgerIcon from "../../assets/blogo.jpg";

const Header = () => {
    return (
        <nav> 
            <div className="icon" >
           <img src ={burgerIcon}/>
           </div>
        <a href="/"> Home</a>
        <a href="/contact"> Contact</a>
        <a href="/about"> About</a>
        <a href="/cart"> Shopping Cart</a>
      
        <DropdownMenu >
            
        </DropdownMenu>
   
   
          
   

    </nav>
    )}

export default Header;
