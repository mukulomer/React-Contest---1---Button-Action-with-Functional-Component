import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [classname, setClassname] = React.useState("para");

  const handelClick = () => {
    let classN = "enable";
    setClassname(classN);
  };
  return (
    <div id="main">
      <button id="click" onClick={handelClick}>
        Click
      </button>
      <p className={classname} id="para">
        Hello, I've learnt to use the full-stack evaluation tool. This makes me
        so happy
      </p>
    </div>
  );
}

export default App;
