import React, { useState } from 'react';
import "./App.css";

var navApp = navigator.userAgent.toLowerCase();

function HomePageGreeting() {

  const [isRedColor, setRedColor] = useState(false);
  const toggleColor = () => setRedColor((prev) => !prev);

  let osName = "Unknown OS";
  if (navApp.indexOf("mac") != -1) {
    osName = "Welcome to my Mac";
  } else if (navApp.indexOf("win") != -1) {
    osName = "Welcome to my Windows";
  } else {
    osName = "Welcome to my PC";
  }

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          {osName}
        </p>
      </div>
      <button
        onClick={toggleColor}
        style={{
          background: isRedColor ? "red" : "black",
          color: 'white'
        }}
      >
        Button is {isRedColor ? "red" : "not red"}
      </button>
    </div>
  )
}

export default HomePageGreeting
