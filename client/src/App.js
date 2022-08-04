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
import { DashboardCompany} from "./components/DashboardCompany";
import { StartupsListInvestor } from "./components/StartupsListInvestor"
import { InvestmentRequest } from "./components/InvestmentRequest"
import { Home } from "./components/Home"
import { ChatRoom } from "./components/ChatRoom"
import { MakePayment } from "./components/MakePayment"
import { AddFounders } from "./components/AddFounders";
import { ProfileCompany } from "./components/ProfileCompany"
import { CapTable } from "./components/CapTable"

import { Trash } from "./components/Trash"
// import { SideNav } from "./components/SideNav"
import { Test } from "./components/Test";
// import Navbar from "./components/Navbar";
  
  function App() {
    return (
      <Router>
        {/* <Navbar/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/form-investor" element={<FormInvestor />} />
          <Route path="/form-company" element={<FormCompany />} />
          <Route path="/form-employee" element={<FormEmployee />} />
          <Route path="/dashboard-investor" element={<DashboardInvestor/>} />
          <Route path="/dashboard-company" element={<DashboardCompany/>} />
          <Route path="/test" element={<Test/>} />
          <Route path='/startups-list-investor' element={<StartupsListInvestor/>} />
          <Route path='/investment-request' element={<InvestmentRequest/>} />
          <Route path='/chatroom' element={<ChatRoom/>} />
          <Route path='/add-founders' element={<AddFounders/>} />
          <Route path="*" element={<Home/>} />
          <Route path='/make-payment' element={<MakePayment/>} />
          <Route path='/profile-company' element={<ProfileCompany/>} />
          <Route path='/trash' element={<Trash/>} />
          <Route path='/cap-table' element={<CapTable/>} />
        </Routes>
    </Router>
    );
  }
  
  export default App;
