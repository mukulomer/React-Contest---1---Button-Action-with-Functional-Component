import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [para, setpara] = React.useState(<p></p>);
  const handelClick = () => {
    const newPara = (
      <p id="para">
        Hello, I've learnt to use the full-stack evaluation tool. This makes me
        so happy
      </p>
    );
    setpara(newPara);
  };
  return (
    <div id="main">
      <button id="click" onClick={handelClick}>
        Click
      </button>
      {para}
    </div>
  );
}

export default App;
