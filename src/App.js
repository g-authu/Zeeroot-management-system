import React from "react";
// import UserDataTable from "./components/UserDataTable";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import UserDataTable from "./components/UserDataTable";
import {BrowserRouter as Router, Route, Routes  } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
      <Route path="/" exact Component={Home} />
      <Route path="/UserDataTable" exact Component={UserDataTable}/>

      </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
