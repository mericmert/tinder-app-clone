import "./App.css";
import Navbar from "./components/Navbar";
import CardList from "./components/CardList";
import GlobalContext from "./utils/GlobalContext";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { Routes, Route, Link } from "react-router-dom";
import Homepage from "./components/Homepage";
import React from "react";
import { setAuthorizationToken } from "./utils/setAuthToken";
function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route
        path="/shuffle"
        element={
          <GlobalContext>
            <CardList />
          </GlobalContext>
        }
      />
      </Routes>
    </div>
  );
}

export default App;
