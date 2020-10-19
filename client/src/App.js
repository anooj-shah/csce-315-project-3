import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {

  const [apiResponse, setAPIResponse] = useState('');

  // const callAPI = () => {
  //   console.log('working');
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => setAPIResponse(res))
      .catch(err => err);
  // };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">{apiResponse}</p>
    </div>
  );
};

export default App;
