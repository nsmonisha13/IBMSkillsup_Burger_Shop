// Write all the code here
import { CiYoutube } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";

const Footer = () => {return(
    <footer>
    <h2>Burger Shop</h2>
   <br/>
    <p>We are trying to give you the best taste posiible.<br/>
        We give attention to genuine feedback.
        <strong>All right received @burgershop</strong>
    </p>
    <aside>
    <h4>Follow Us</h4>
    <a href ="/"> <CiYoutube /></a>
    <a href ="/">  <CiInstagram />  </a>
    <a href="/" class="fab fa-github"></a>
    </aside>
    </footer>
)}

export default Footer;