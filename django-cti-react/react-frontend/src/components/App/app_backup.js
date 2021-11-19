import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const fetchTest = () => { fetch("http://localhost:8000/backend/", {
    method: "POST",
    headers: {
      'Accept': "application/json",
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ Hi: "Cunt" }),
  })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log(response);
      setData(response);
    })
    .catch((error) => {
      console.error(error);
    })};

    const fetchTest2 = () => { fetch("http://localhost:8000/api/stix/")
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log(response);
      setData2(response[0]);
    })
    .catch((error) => {
      console.error(error);
    })};
    useEffect(() => {
      fetchTest();
      fetchTest2()
    }, []);
  return (
    <div className="App">
      <p>{data.message}</p>
      {<p>{data2.name}</p>}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
