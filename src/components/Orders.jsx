import React, { useEffect, useState } from "react";
import "./Dishes.css";

import { getOrders } from "../actions/a_orders";
import { NavLink } from "react-router-dom";

import { connect } from "react-redux";

function Orders(props) {

    useEffect(() => {
        props.getOrders(); 
      }, []);
      console.log("orders : ",props.orders);
    //   let orders =[];
    //   orders =[...props.orders];
  return (<div>{(props.orders)? 
    props.orders.map(e=>e.userInfo.name) : "hi mr idiot"}</div>)
}

export default connect(
  (state) => {
    return {
      dishesList: state.r_dishes,
      orders: state.r_orders,
      user: state.r_users,
    };
  },
  { getOrders }
)(Orders);

/*
[
    {
      "userInfo": {
        "userId": "0",
        "userName": "khalil"
      },
      "orderInfo": {
        "orderId": "0",
        "order_send_date": "06/06/2006 17:25:36",
        "order_response": "to_deliver",
        "order_response_date": "06/06/2006 17:26:36"
      },
      "orderProducts": [
        {
          "title": "couscous",
          "price": "25",
          "quantity": "2"
        },
        {
          "title": "couscous",
          "price": "25",
          "quantity": "2"
        },
        {
          "title": "couscous",
          "price": "25",
          "quantity": "2"
        }
      ]
    },
    {
      "orderinfo": [
        {
          "id": 2,
          "title": "سلاطة  مشوية",
          "img": "https://www.cuisinetunisienne.tn/wp-content/uploads/2019/03/Recette-Salade-Mechouia-1080x810.jpg",
          "price": 10,
          "quantity": 1
        },
        {
          "id": 1,
          "title": "طاجين",
          "img": "https://www.simpleetgourmand.fr/wp-content/uploads/tajine-tunisien-thon_01.jpg",
          "price": 30,
          "quantity": 1
        }
      ],
      "delivery_status": "pending",
      "userinfo": {
        "name": "Mohamed",
        "email": "kmkhalilo@gmail.com",
        "password": "12345678",
        "tel": "27 145 229",
        "adress": "Fouchana centre 2",
        "role": "user",
        "cmdes_list": []
      }
    }
  ]
  */