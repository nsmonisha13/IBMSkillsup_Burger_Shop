import React , {useState} from "react";
import { Country, State } from "country-state-city";
import Popup from 'reactjs-popup';
import MyOrders from "../myOrders/MyOrders";



const Shipping = () => {
  const countries = Country.getAllCountries();
  let availableState = [];
 
  let [selectedCountry, setSelectedCountry] = React.useState();//useState("⬇️ Select a Countrty ⬇️")
  let [selectedState, setSelectedState] = React.useState();//useState("⬇️ Select a State ⬇️")
  availableState = State.getStatesOfCountry(selectedCountry);
  return (
    <section className="shipping">
      <main>
        <h1>Shipping Details</h1>
        <form>
          <div>
            <label>H.No.</label>
            <input type="text" placeholder="Enter House No." />
          </div>
          <div>
            <label>City</label>
            <input type="text" placeholder="Enter City" />
          </div>

          <div>
            <label>Country</label>
            <select
            placeholder="Country"
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            >
            <option>--Choose Country--</option>
            {countries.map((value, key) => {
            return (
              <option value={value.isoCode} key={key}>
              {value.name}
              </option>
            );
            })}
            </select>
          </div>
          <div>
            <label>State</label>
            <select
            placeholder="State"
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            >
            <option>--Choose State--</option>
            {availableState?.map((e, key) => {
            return (
              <option value={e.isoCode} key={key}>
                {e.name}
              </option>
            );
          })}
          </select>
          </div>

          <div>
            <label>Pin Code</label>
            <input type="number" placeholder="Enter Pincode" />
          </div>

          <div>
            <label>Phone Number</label>
            <input type="number" placeholder="Enter phone number" />
          </div>
             
          
          <Popup trigger=
              {<button type = "button"><a href="MyOrders">Confirm Order</a></button>}
              position="right center">
              <div style={{color:"red",position: 'absolute', top: '50%', right: '100%', transform: 'translateY(-50%)', backgroundColor: '#fff', padding: '10px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'}}>Order Placed</div>
               
          </Popup>
        </form>
      </main>
    </section>
  );
};

export default Shipping;
