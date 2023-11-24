// Write all the code here
import {FaBars} from "react-icons/fa";
import DropdownMenu from "./DropdownMenu";

const Header = () => {
    return (
        <nav> 
        <a href="/"> Home</a>
        <a href="/contact"> Contact</a>
        <a href="/about"> About</a>
        <a href="/cart"> Shopping Cart</a>
      
        <DropdownMenu >
            
        </DropdownMenu>
   
   
          
   

    </nav>
    )}

export default Header;
