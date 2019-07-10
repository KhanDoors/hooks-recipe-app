import React from "react";
import "./App.css";
const dotenv = require("dotenv");

dotenv.config();

const app_id = process.env.app_id;
const app_key = process.env.app_key;

const App = () => {
  const APP_ID = app_id;
  const APP_KEY = app_key;

  const request = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  return (
    <div className="App">
      <h1>Let's go!</h1>
    </div>
  );
};

export default App;
