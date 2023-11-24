// Write all the code here
import skj from "../../assets/skj.jpg";
import { IoSearchCircle } from "react-icons/io5";

const About = () => {return(
<section className="about">
    <main>
        <h1>About Us</h1>
        <article>
            <h4>BURGER SHOP</h4>
            <p>
                This is Burger Shop. The place for most tasty burgers on the entire earth.
                <br/><br/>
                Explore the various type of food and burgers. Click below to see the menu.
            </p>
            <a href ="/"> <IoSearchCircle /></a>
        </article>    
        <div>
            <h2>Founder</h2>
            <article>
                <div>
                    <img src={skj}/> 
                    <h3>Nelson</h3>
                </div>
                <p>
                    I am Nelson, the founder of Burger Shop.
                    Affiliated to God Taste...
                </p>
            </article>
        </div>
    </main>
</section>

)}

export default About;

