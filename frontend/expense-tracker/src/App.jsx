import React from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import SignUp from './pages/Auth/SignUp'
import Login from './pages/Auth/Login'
import Income from './pages/Dashboard/Income'
import Expense from './pages/Dashboard/Expense'
import Home from './pages/Dashboard/Home'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/income" element={<Income />} />
        <Route path="/expense" element={<Expense />} />
      </Routes>
    </Router>
  )
}

export default App

const root = () => {
  //check if tokes available in localhost
  const isAuthenticated = !!localStorage.getItem("token")

  //redirect to dashboard if authenticated, otherwise to login
  return isAuthenticated ? (
    <Navigate to="/dashboard" />
  ) : (
    <Navigate to="/login" />
  )
}