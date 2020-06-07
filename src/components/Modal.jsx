import React, { useEffect } from "react";
import "./Navbar.css";
import { getDishes } from "../actions/action_1";
import { connect } from "react-redux";

function Modal(props) {
  return (
    <div className="navbar-container">
      <div className="navbar-inner-container">
        <div className="logo">
        مطعم السلطان
        </div>
        <div className="right-side">
          <div className="menu">
            <div>إتصل بنا</div>
            <div>من نحن</div>
          </div>
          <div className="auth">
            <div>خروج</div>
            <div>دخول</div>
            <div>تسجيل</div>
          </div>
          <div className="cart">
          <i class="fa fa-shopping-cart" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Modal;