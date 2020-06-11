import React, { useEffect,useState } from "react";
import "./Dishes.css";
import { getDishes } from "../actions/a_dishes";
import { addToCart, removeFromCart } from "../actions/a_orders";

import { connect } from "react-redux";

function Dishes(props) {
  useEffect(() => {
    props.getDishes();
  }, []);

  
  let menu = [...props.dishesList];

  const cartAddBtn= (e)=>{
    if (props.orders.map(a=>a.id).includes(e.id) === true) {
           return <button className="carted" onClick={a=>{props.removeFromCart(e.id)}}>إحذف من السلة</button>
    }else{
       return <button className="notCarted" onClick={a=>{props.addToCart(e)}}> أضف إلى سلة المشتريات </button>}        
    }
    
  return (
    <div className="card-container">
      <div className="card-inner-container">
        {menu.map((e) => (
          <div key={e.id} className="card">
            <div
              className="image"
              style={{ backgroundImage: `url( ${e.img} )` }}
            ></div>
            <div className="card-text">
              <h4>{e.title}</h4>
              <h4>{` ${e.price} دينار`}</h4>
            </div>
            {cartAddBtn(e)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default connect(
  (state) => {
    return { dishesList: state.r_dishes,orders: state.r_orders };
  },
  { getDishes, addToCart,removeFromCart }
)(Dishes);
