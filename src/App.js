import React from "react";

function App() {
  const nayoks = ["Salman", "Sahrukh", "Akshay", "Ranveer"];
  return (
    <div className="App">
      <ul>
        {nayoks.map((nayok) => {
          return <li>{nayok}</li>;
        })}
      </ul>
      <Person name="Dip Pal" profession="programmer" />
      <Person name="sergi Constance" profession="Body Builder" />
      <Person name="Motherchod" profession="none" />
    </div>
  );
}

function Person(props) {
  console.log(props);
  const personStyle = {
    backgroundColor: "skyblue",
    border: "2px solid lightsalmon",
    margin: "20px",
    padding: "10px",
    borderRadius: "5px",
  };
  return (
    <div style={personStyle}>
      <h3>{props.name}</h3>
      <h5>profession : {props.profession}</h5>
    </div>
  );
}

function Friend() {
  return (
    <div>
      <h4>phone : </h4>
    </div>
  );
}

export default App;
