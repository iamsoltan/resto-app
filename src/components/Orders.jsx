import React, { useEffect, useState } from "react";
import "./Orders.css";

import { getOrders, acceptOrders, denyOrders } from "../actions/a_orders";
import { NavLink } from "react-router-dom";

import { connect } from "react-redux";

function Orders(props) {

    useEffect(() => {
        props.getOrders(); 
    }, []);

    if (props.user.role) {
        if (props.user.role === "admin"){
            if (props.orders){
                return (
                    <div className="list-container">
                    <table id="list-table">
                    <tr>
                      <th>معرف الطلب</th>
                      <th>اسم العميل</th>
                      <th>العنوان</th>
                      <th>المبلغ</th>
                      <th>العمليات</th>
                      <th>رفض الطلب</th>
                      <th>قبول الطلب</th>
                    </tr>
                    {props.orders.map(e=>(
                    <tr key={e.id}>
                      <td>{e.id}</td>
                      <td>{e.userInfo.name}</td>
                      <td>{e.userInfo.adress}</td>
                      <td>{e.orderDishes.map(e=>e.price*e.quantity).reduce((t,e)=>t+e)}</td>
                      <td>{e.delivery_status==="pending" ? "قيد التحقق" :e.delivery_status==="denied" ? "رفضت" :e.delivery_status==="delivred" ? "مقبول" :"contact dev" }</td>
                      <td><button className="deny" onClick={()=>{props.denyOrders(e.id)}}>رفض</button></td>
                      <td><button className="deliver" onClick={()=>{props.acceptOrders(e.id)}}>قبول</button></td>

                    </tr> 
                    ))}
                  </table>
                  </div>
                )
            }
        }else if (props.user.role === "user"){
            if (props.orders){
                return ( 
                <div className="list-container">
                <table id="list-table">
                <tr>
                  <th>معرف الطلب</th>
                  <th>العنوان</th>
                  <th>المبلغ</th>
                  <th>العمليات</th>

                </tr>
                {props.orders.map(e=>{if(e.userInfo.id===props.user.id){ return(
                <tr key={e.id}>
                  <td>{e.id}</td>
                  <td>{e.userInfo.adress}</td>
                  <td>{e.orderDishes.map(e=>e.price*e.quantity).reduce((t,e)=>t+e)}</td>
                  <td>{e.delivery_status==="pending" ? "قيد التحقق" :e.delivery_status==="denied" ? "رفضت" :e.delivery_status==="delivred" ? "مقبول" :"contact dev" }</td>
                </tr> 
                )}})}
              </table>
              </div>)
            }
        }
    }
      
  
}

export default connect(
  (state) => {
    return {
      dishesList: state.r_dishes,
      orders: state.r_orders,
      user: state.r_users,
    };
  },
  { getOrders, acceptOrders, denyOrders }
)(Orders);
