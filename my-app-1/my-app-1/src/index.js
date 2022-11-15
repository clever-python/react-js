import React from 'react';
import ReactDOM from 'react-dom';


const name = "sourabh";
const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();
ReactDOM.render(
<>
<h1>`Hello, My name is {name}`</h1>
<p>current date is ={currDate} </p>
<p>current Time is ={currTime} </p>
  </>,
  document.getElementById("root")
);
