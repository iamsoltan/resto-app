import React, { useEffect } from 'react';
//import logo from './logo.svg';
import './App.css';
import { getDishes } from './actions/action_1'
import { connect } from 'react-redux'
import Dishes from "./components/Dishes";
import NavBar from "./components/Navbar";


function App(props) {
  console.log("props : ", props);

  let cmd = "";
  // useEffect(
  //  props.getDishes,[]
  // );
  return (
    <React.Fragment>
    <NavBar />
    <Dishes />
    </React.Fragment>
    // <div>
    //   {console.log("props.list : ", props.list)}
    //   <button onClick={props.getDishes}>get dishes list</button>
    //   {
    //     props.list.map(e => <div key={e.id}>{e.id} /   {e.title}</div>)
    //   }
    // </div>
  )
  // <NavBar />
  // <Router>
  //   <Switch>
  //     <Route />
  //     <Route />
  //   </Switch>
  // </Router>






  // <div className="App">
  //   <input ref={x => cmd = x} placeholder="text will be passed as a commande"></input>
  //   <button onClick={() => { props.Add_Cmd(cmd.value); console.log("input is  : ", cmd.value) }}>pass the command</button>
  //   <div>{props.Cmd_State.map(e=><li key={e.id}>{e.text}</li>)}</div>
  // </div>

}

export default connect(
  (state => { return { list: state } }),
  { getDishes })
  (App);
