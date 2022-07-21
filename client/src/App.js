import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { TezosNodeWriter, TezosParameterFormat } from "conseiljs";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Signup } from "./components/Signup"
import { Signin } from "./components/Signin"
import { FormInvestor } from "./components/FormInvestor";
import { FormCompany } from "./components/FormCompany";
import { FormEmployee } from "./components/FormEmployee";
import { Test } from "./components/Test";
  
  function App() {
    return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/form-investor" element={<FormInvestor />} />
          <Route path="/form-company" element={<FormCompany />} />
          <Route path="/form-employee" element={<FormEmployee />} />
          <Route path="/test" element={<Test/>} />
        </Routes>
    </Router>
    );
  }
  
  export default App;
