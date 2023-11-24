import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import Shipping from "../cart/Shipping";

const MyOrders = () => {
  const arr = [
    {
      OrderId:"1",
      Status:"Processing",
      ItemQty:"2",
      Amount:"2156",
      PaymentMethod:"COD",
      Action:""
    },
    {
      OrderId:"2",
      Status:"Processing",
      ItemQty:"2",
      Amount:"2156",
      PaymentMethod:"COD",
      Action:""
    },
    {
      OrderId:"3",
      Status:"Processing",
      ItemQty:"2",
      Amount:"2156",
      PaymentMethod:"COD",
      Action:""
    },
    {
      OrderId:"4",
      Status:"Processing",
      ItemQty:"2",
      Amount:"2156",
      PaymentMethod:"COD",
      Action:""
    }
  ];

  return (

    <section className="tableClass">
      <main>
        <table>
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Status</th>
              <th>Item Qty</th>
              <th>Amount</th>
              <th>Payment Method</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
        {arr.map(( listValue, index ) => {
          return (
            <tr key={index}>
              <td>{listValue.OrderId}</td>
              <td>{listValue.Status}</td>
              <td>{listValue.ItemQty}</td>
              <td>{listValue.Amount}</td>
              <td>{listValue.PaymentMethod}</td>
              <td><Link to={`../order/${listValue.OrderId}`}><AiOutlineEye/></Link></td>
 
            </tr>
          );
        })}
  
           
          </tbody>
        </table>
      </main>
    </section>
 
  )};

export default MyOrders;
