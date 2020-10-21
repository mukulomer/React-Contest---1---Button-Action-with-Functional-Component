import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [para, setPara] = React.useState(false);

  function rederPara() {
    return (
      <p id="para">
        Hello, I've learnt to use the full-stack evaluation tool. This makes me
        so happy
      </p>
    );
  }
  return (
    <div id="main">
      <button id="click" onClick={() => setPara(true)}>
        click
      </button>
      {para ? rederPara() : ""}
    </div>
  );
}

export default App;
