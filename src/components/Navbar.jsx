import React, {useState, useEffect } from "react";
import "./Navbar.css";
import { registerUser,loginUser, logoutUser } from "../actions/a_users";
import { connect } from "react-redux";
import logo from "../logo.png";


function Navbar(props) {

  const xxx=()=>{ if (props.user !== "none") {return (`مرحبا ${props.user.name} !`)}};
  let MrClient = xxx();
  const [mDisplay1, setmDisplay1] = useState("none");
  const [mDisplay2, setmDisplay2] = useState("none");
  const [displayLogin, setDisplayLogin] = useState("block");
  const [displayLogout, setDisplayLogout] = useState("none");
  let regUser ={};
  let logUser ={};
  let modalOverlay1;
  let modalOverlay2;
  let submitButton1;
  let submitButton2;
  let cancelButton1;
  let cancelButton2;
  const logout = () => {
    console.log("logout");
    props.logoutUser();
    setDisplayLogin("block");
    setDisplayLogout("none");
  };
  const Ologin = () => {
    console.log("Ologin");
    setmDisplay2("block")

  };
  const login=()=>{
    console.log("logged in");
    props.loginUser(logUser.email.value,logUser.password.value);
    setDisplayLogin("none");
    setDisplayLogout("block");
  }
  const Oregister = () => {
    console.log("Oregister");
    setmDisplay1("block")
  };
  const register = () => {
    console.log("register");
    props.registerUser(regUser)
  };
  const cancel = (e) => {
    if ((e.target === modalOverlay1) || (e.target === cancelButton1) ||( e.target === submitButton1))
    {setmDisplay1("none")}
    else if( (e.target ===modalOverlay2) ||(e.target ===cancelButton2) ||( e.target === submitButton2)){
    setmDisplay2("none")}
  };
  
  return (
    <React.Fragment>
      <div className="navbar-container">
        <div className="navbar-inner-container">
          <div className="logo"><i class="fa fa-rebel" aria-hidden="true"></i>  مطعم السلطان  <i class="fa fa-rebel" aria-hidden="true"></i></div>
          <div className="right-side">
            <div className="menu">
              <div>إتصل بنا</div>
              <div>من نحن</div>
            </div>
            <div className="auth">
              <div style={{display:displayLogout}} className="auth-logout" onClick={logout}>خروج</div>
              <div>{MrClient}</div>
              <div style={{display:displayLogin}} className="auth-login" onClick={Ologin}>دخول</div>
              <div style={{display:displayLogin}} className="auth-register" onClick={Oregister}>تسجيل</div>
            </div>
            <div className="cart">
              <i class="fa fa-shopping-cart" aria-hidden="true"><span>{props.orders.length}</span></i>
            </div>
          </div>
        </div>
      </div>
      <div className="modal" ref={e=>modalOverlay1=e} onClick={e=>cancel(e)} style={{display:mDisplay1}}>
        <div className="register-m">
          <h3>أنشئ حساباً</h3>
          <label for="fname">الإسم و اللقب</label>
          <input ref={e=>regUser.name=e} type="text" value="Mohamed" placeholder="" required/>
          <label for="fname">البريد الإلكتروني</label>
          <input ref={e=>regUser.email=e} type="email" placeholder="" required/>
          <label for="fname">كلمة السر</label>
          <input ref={e=>regUser.password=e} type="password" placeholder="ستة حروف على الأقل" required/>
          <label for="fname">رقم الهاتف</label>
          <input ref={e=>regUser.tel=e} type="tel" value="27 145 229" placeholder="" required/>
          <label for="fname">العنوان</label>
          <input ref={e=>regUser.adress=e} type="text" value="Fouchana centre 2" placeholder="" required/>
          <button ref={e=>submitButton1=e} className="register-btn" onClick={e=>{register();cancel(e)}}>أنشئ حساباً</button>
          <button ref={e=>cancelButton1=e} className="cancel-btn" onClick={e=>cancel(e)}> إلغاء التسجيل </button>
        </div>
      </div>
      <div className="modal" ref={e=>modalOverlay2=e} onClick={e=>cancel(e)} style={{display:mDisplay2}}>
        <div className="register-m">
          <h3>تسجيل الدخول</h3>
          <label for="fname">البريد الإلكتروني</label>
          <input ref={e=>logUser.email=e} type="email" defaultValue="kmkhalilo@gmail.com" placeholder="" required/>
          <label for="fname">كلمة السر</label>
          <input ref={e=>logUser.password=e} type="password" defaultValue="12345678" placeholder="ستة حروف على الأقل" required/>
          <button ref={e=>submitButton2=e} className="register-btn" onClick={e=>{login();cancel(e)}}>دخول</button>
          <button ref={e=>cancelButton2=e} className="cancel-btn" onClick={e=>cancel(e)}> إلغاء الدخول </button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default connect(
  (state) => {
    return { user: state.r_users, orders : state.r_orders };
  },
  { registerUser,loginUser, logoutUser }
)(Navbar);
