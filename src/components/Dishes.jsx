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

  menu.map(e=>e.carted=false);  

 const  changeCarted = (a,e) => {
    e.carted = !e.carted;
    if (a.target.className === "notCarted"){
      a.target.className = "carted";
      a.target.innerHTML="إحذف من السلة";
      props.addToCart(e)
    }else if (a.target.className === "carted"){
      a.target.className = "notCarted";
      a.target.innerHTML="أضف إلى سلة المشتريات";
      props.removeFromCart(e.id);
    };
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
            <button className="notCarted" onClick={a=>{changeCarted(a,e)}}> أضف إلى سلة المشتريات </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default connect(
  (state) => {
    return { dishesList: state.r_dishes };
  },
  { getDishes, addToCart,removeFromCart }
)(Dishes);
