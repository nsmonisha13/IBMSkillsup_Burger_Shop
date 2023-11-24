// Write all the code here

import Popup from "reactjs-popup";
import burger2 from "../../assets/burger2.png";

const Contact = () => {return(
<section className="contact">
<form >
    <h2>Contact Us</h2>
    <input type="text"></input>
    <input type="text"></input>
    <textarea></textarea>

    <Popup trigger=
        { <button type="button">send</button>}

        position="right center">
    <div style={{color:"red", top: '50%', right: '100%', transform: 'translateY(-50%)', backgroundColor: '#fff', padding: '10px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'}}>
        Thank you for contacting us!We will get back to you shortly.
    </div>

</Popup>
</form>
<div className="formBorder">
    <div>
        <img src ={burger2}></img>
    </div>
</div>
</section>
)}

export default Contact;
