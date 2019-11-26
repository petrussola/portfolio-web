import React from "react";
import "./App.css";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Header} />
      <Route path="/" component={Contact} />
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={About} />
      <Route path="/projects/:id" component={Project} />
    </div>
  );
}

export default App;
