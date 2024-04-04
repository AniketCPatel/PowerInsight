// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/PowerInsight" exact Component={Dashboard} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
