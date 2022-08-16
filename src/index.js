import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import App from './App';
import Login from "./Login"
import BoardAdmin from "./Components/BoardAdmin";
import BoardTeacher from "./Components/BoardTeacher";
import BoardStudent from "./Components/BoardStudent";
import BoardParent from "./Components/BoardParent";
import BoardUser from "./Components/BoardUser";
import Profile from "./Components/Profile";

import Message from "./Components/AdminPanel/Message"

ReactDOM.render(
    <Router>
        <App />
      <Routes>
        <Route path="/" exact element={<Login/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/admin" element={<BoardAdmin/>} />
        <Route path="/teacher" element={<BoardTeacher/>} />
        <Route path="/student" element={<BoardStudent/>} />
        <Route path="/parent" element={<BoardParent/>} />
        <Route path="/admin/sms" element={<Message/>} />
        {/* <Route path="/comments" element={<Comments/>} /> */}
        
      </Routes>
    </Router>,
    
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
