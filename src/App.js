import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Add_Cmd } from './actions/action_1'
import { connect } from 'react-redux'

function App(props) {
  console.log("props : ", props);

  let cmd = "";
  return (
    <div className="App">
      <input ref={x => cmd = x} placeholder="text will be passed as a commande"></input>
      <button onClick={() => { props.Add_Cmd(cmd.value); console.log("input is  : ", cmd.value) }}>pass the command</button>
      <div>{props.Cmd_State.map(e=><li key={e.id}>{e.text}</li>)}</div>
    </div>
  );
}

export default connect(
  (state =>{ return {Cmd_State : state} }),
  { Add_Cmd })
  (App);
