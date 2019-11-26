import React from "react";
import "./App.css";
import { Route } from "react-router-dom";

// IMPORT COMPONENTS
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Project from "./components/Project";
import Center from "./components/Center";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Header} />
      <Route exact path="/" component={Center} />
      <Route exact path="/" component={HomePage} />
      <Route path="/" component={Footer} />
      <Route path="/about" component={About} />
      <Route path="/projects/:id" component={Project} />
    </div>
  );
}

export default App;
