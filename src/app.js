import React from 'react';
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { NavBar } from "./components/navbar";
import { Home } from "./components/home";
import { Work } from "./components/workork";
import { Contact } from "./components/contactontact";


function App() {
  return (
    <div>
      <Router>
        <div className='App'>
          <NavBar />
          
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/Projects/" element={<Work />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
           
        </div>
         <Foot />

      </Router>
      
    </div>




  );
}

export default App;