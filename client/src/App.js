import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Signup } from "./components/Signup"
import { Signin } from "./components/Signin"
import { FormInvestor } from "./components/FormInvestor";
import { FormCompany } from "./components/FormCompany";
import { FormEmployee } from "./components/FormEmployee";
import { DashboardInvestor} from "./components/DashboardInvestor";
import { Test } from "./components/Test";
import Navbar from "./components/Navbar";
  
  function App() {
    return (
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/form-investor" element={<FormInvestor />} />
          <Route path="/form-company" element={<FormCompany />} />
          <Route path="/form-employee" element={<FormEmployee />} />
          <Route path="/dashboard-investor" element={<DashboardInvestor/>} />
          <Route path="/test" element={<Test/>} />
        </Routes>
    </Router>
    );
  }
  
  export default App;
