import React from 'react';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/dashboard/Dashboard';
import Homepage from './pages/hompage/Homepage';
import MemberSignup from './pages/login-signup/MemberSignup';
import Signin from './pages/login-signup/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path = "/" element={<Homepage/>}/>
        <Route exact path = "/member-signup" element={<MemberSignup/>} /> 
        <Route exact path = "/main-dashboard" element={<Dashboard/>}/>
        <Route exact path = "/login" element={<Signin/>}/>
        <Route path="*" element= {
          <main>
            <h1>There's nothing here...</h1>
          </main>
        }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
