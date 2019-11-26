import React from "react";
import "./App.css";
import { Route } from "react-router-dom";

// IMPORT COMPONENTS
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Project from "./components/Project";
import Center from "./components/Header/Center";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Header} />
      <Route path="/" component={Center} />
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={About} />
      <Route path="/projects/:id" component={Project} />
      <Route path="/" component={Footer} />
    </div>
  );
}

export default App;
