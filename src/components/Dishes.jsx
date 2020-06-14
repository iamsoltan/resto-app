import React, { useEffect, useState } from "react";
import "./Dishes.css";
import { getDishes } from "../actions/a_dishes";
import { addToCart, removeFromCart } from "../actions/a_cart";
import { NavLink } from "react-router-dom";

import { connect } from "react-redux";

function Dishes(props) {
  useEffect(() => {
    props.getDishes();
  }, []);

  let menu = [...props.dishesList];

  const cartAddBtn = (e) => {
    if (props.carted.map((a) => a.id).includes(e.id) === true) {
      return (
        <button
          className="carted"
          onClick={(a) => {
            props.removeFromCart(e.id);
          }}
        >
          إحذف من السلة
        </button>
      );
    } else {
      return (
        <button
          className="notCarted"
          onClick={(a) => {
            props.addToCart(e);
          }}
        >
          {" "}
          أضف إلى سلة المشتريات{" "}
        </button>
      );
    }
  };

  if (props.user === "none") {
    return (
      <div className="card-container">
        {menu.filter(e=>(e.mode==="active")).map((e) => (
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
    );
  } else if (props.user.role) {
    if (props.user.role === "admin") {
      return (
        <div className="card-container">
          <NavLink to="/add/add">
            <div
              className="add-dish-card image"
              style={{
                backgroundImage: `url( https://chinesenewyear.imgix.net/assets/images/food/chinese-new-year-food-feast.jpg?q=50&w=640&h=360&auto=format )`,
              }}
            >
              <div className="add-dish">
                <p>أضف</p>
              </div>
            </div>
          </NavLink>
          {menu.map((e) => (
            <div key={e.id} className="card">
              <div
                className="image"
                style={{ backgroundImage: `url( ${e.img} )` }}
              >
                <NavLink to={{ pathname: `/edit/dish/${e.id}` }} >
                  <span className="gear">
                    <span className="fa fa-cog" title="إضغط للتعديل" />
                  </span>
                </NavLink>
              </div>
              <div className="card-text">
                <h4>{e.title}</h4>
                <h4>{` ${e.price} دينار`}</h4>
              </div>
              {cartAddBtn(e)}
            </div>
          ))}
        </div>
      );
    } else if (props.user.role === "user") {
      return (
        <div className="card-container">
          {menu.filter(e=>(e.mode==="active")).map((e) => (
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
      );
    }
  }
}

export default connect(
  (state) => {
    return {
      dishesList: state.r_dishes,
      carted: state.r_cart,
      user: state.r_users,
    };
  },
  { getDishes, addToCart, removeFromCart }
)(Dishes);
