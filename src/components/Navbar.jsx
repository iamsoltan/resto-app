import React, {useState, useEffect } from "react";
import "./Navbar.css";
import { addUser } from "../actions/action_1";
import { connect } from "react-redux";
import logo from "../logo.png";
import "./Navbar.css";


function Navbar(props) {
  console.log("props.user",props.user);
  let MrClient="khalil";
  const xxx=()=>{ if (props.user.name !== undefined) {return (`مرحبا ${props.user.name} !`)}};
  MrClient = xxx();
  const [mDisplay1, setmDisplay1] = useState("none");
  const [mDisplay2, setmDisplay2] = useState("none");
  let regUser ={};
  let logUser ={};
  let modalOverlay1;
  let modalOverlay2;
  let cancelButton1;
  let cancelButton2;
  const logout = () => {
    console.log("logout");
  };
  const Ologin = () => {
    console.log("Ologin");
    setmDisplay2("block")

  };
  const Oregister = () => {
    console.log("Oregister");
    setmDisplay1("block")
  };
  const register = () => {
    console.log("register");
    props.addUser(regUser)
  };
  const cancel = (e) => {
    if ((e.target === modalOverlay1) || (e.target === cancelButton1))
    {setmDisplay1("none")}
    else if( (e.target ===modalOverlay2) ||(e.target ===cancelButton2)){
    setmDisplay2("none")}
  };
  console.log("props.user.name : ",props.user.name);
  
  return (
    <React.Fragment>
      <div className="navbar-container">
        <div className="navbar-inner-container">
          <div className="logo">مطعم السلطان</div>
          <div className="right-side">
            <div className="menu">
             <div>{MrClient}</div>
              <div>إتصل بنا</div>
              <div>من نحن</div>
            </div>
            <div className="auth">
              <div onClick={logout}>خروج</div>
              <div onClick={Ologin}>دخول</div>
              <div onClick={Oregister}>تسجيل</div>
            </div>
            <div className="cart">
              <i class="fa fa-shopping-cart" aria-hidden="true"></i>
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
          <button className="register-btn" onClick={register}>أنشئ حساباً</button>
          <button ref={e=>cancelButton1=e} className="cancel-btn" onClick={e=>cancel(e)}> إلغاء التسجيل </button>
        </div>
      </div>
      <div className="modal" ref={e=>modalOverlay2=e} onClick={e=>cancel(e)} style={{display:mDisplay2}}>
        <div className="register-m">
          <h3>تسجيل الدخول</h3>
          <label for="fname">البريد الإلكتروني</label>
          <input ref={e=>logUser.email=e} type="email" placeholder="" required/>
          <label for="fname">كلمة السر</label>
          <input ref={e=>logUser.password=e} type="password" placeholder="ستة حروف على الأقل" required/>
          <button className="register-btn" onClick={register}>دخول</button>
          <button ref={e=>cancelButton2=e} className="cancel-btn" onClick={e=>cancel(e)}> إلغاء الدخول </button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default connect(
  (state) => {
    return { user: state.user };
  },
  { addUser }
)(Navbar);
