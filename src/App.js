import React from 'react';
import { HashRouter , Route } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import Homepage from './pages/hompage/Homepage';
import MemberSignup from './pages/signin-signup/MemberSignup';

function App() {
  return (
    <HashRouter>
        <MemberSignup/>
        <Dashboard/>
      {/* <Homepage/> */}
    </HashRouter>
  );
}

export default App;
