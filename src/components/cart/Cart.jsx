import React from "react";
import { Link } from "react-router-dom";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";

// import burger3 here

const CartItem = ({ value, title, img, increment, decrement }) => (
  <div className="cartItem">
    <div>
      <h4>{title}</h4>
      <img src={img} alt="Item" />
    </div>

    <div>
      <button onClick={decrement}>-</button>
      <input type="number" readOnly value={value} />
      <button onClick={increment}>+</button>
    </div>
  </div>
);

const Cart = () => {
  let [value,setValue]=React.useState(0);
  let [value1,setValue1]=React.useState(0);
  let [value2,setValue2]=React.useState(0);

  const increment = (item,values,setValuefun) => {
    setValuefun(values + item);
    return value;
  };

  const decrement = (item,values,setValuefun) => {
    setValuefun(values - item);
    return value;
  };


  return (
    <section className="cart">
      <main>
        <CartItem
          title={"Cheese Burger"}
          img={burger1}
          value={value}
          increment={() => increment(1,value,setValue)}
          decrement={() => decrement(1,value,setValue)}
      

        // Add the function for decrementing the order by 1 
       
        />
        <CartItem
          title={"Veg Cheese Burger"}
          img={burger2}
          value={value1}
          increment={() => increment(1,value1,setValue1)}
          decrement={() => decrement(1,value1,setValue1)}
        // Add the function for decrementing the order by 2
       
        />
        <CartItem
        title={"Cheese Burger with French Fries"}
        img={burger3}
        value={value2}
        increment={()=>increment(1,value2,setValue2)}
        decrement={() => decrement(1,value2,setValue2)}
        />
       

        <article>
          <div>
            <h4>Sub Total</h4>
            <p>₹{2000}</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>₹{2000 * 0.18}</p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>₹{200}</p>
          </div>{" "}
          <div>
            <h4>Total</h4>
            <p>₹{2000 + 2000 * 0.18 + 200}</p>
          </div>
          <Link to="/shipping">Checkout</Link>
        </article>
      </main>
    </section>
  );
};

export default Cart;
