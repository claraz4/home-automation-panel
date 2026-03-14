import "./styles/variables.css";
import "./styles/globals.css";
import "@fontsource/poppins";
import React from "react";
import "./App.css";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="app-container">
      <Home />
    </div>
  );
}

export default App;
