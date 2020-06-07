import React, { useEffect } from "react";
import "./Dishes.css";
import { getDishes } from "../actions/action_1";
import { connect } from "react-redux";

function Dishes(props) {

  useEffect(() => {
    props.getDishes();
  }, []);
  let Xlist = props.list;
  
  return (
    <div className="card-container">
      <div className="card-inner-container">
        {Xlist.map((e) => (
          <div key={e.id} className="card">
            <div
              className="image"
              style={{ backgroundImage: `url( ${e.img} )` }}
            ></div>
            <div className="card-text">
              <h4>{e.title}</h4>
              <h4>{` ${e.price} دينار`}</h4>
            </div>
            <button>أضف إلى سلة المشتريات </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default connect(
  (state) => {
    return { list: state.list };
  },
  { getDishes }
)(Dishes);
