import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { TezosNodeWriter, TezosParameterFormat } from "conseiljs";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

// Key manager
var key_name = "test_key1";
var key = require(`../../keystore/${key_name}`);

var tezosNode = "https://testnet.tezster.tech",
  contractAddress = "KT1LxQGACpzhTrSxCnBxGRtU9XBWc2EwLW2r";
  
  function App() {
    return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
        <Footer/>
    </Router>
    );
  }
  
  export default App;
