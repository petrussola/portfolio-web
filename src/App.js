import React from "react";
import "./App.css";
import { Route } from "react-router-dom";

// IMPORT COMPONENTS
import Header from "./components/Header";
import ContactSection from "./components/ContactSection";
import HomePage from "./components/HomePage";
import About from "./components/About";
import ContactPage from "./components/ContactPage";
import Project from "./components/Project";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Header} />
      <Route path="/" component={ContactSection} />
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/projects/:id" component={Project} />
    </div>
  );
}

export default App;
