import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Main from "../../pages/Main/Main";
import Customers from "../../pages/Customers/Customers";
import Dashboard from "../../pages/Dashboard/Dashboard";
import "./header.scss";
import Logo from "../../img/Oterventas.png";
import { SearchIcon } from "@primer/octicons-react";

export default function Header() {
  return (
    <Router>
      <div class="bg">
        <div class="header">
          <div class="name">
            <h1>Oterventas</h1>
          </div>
          <nav class="menu">
            <ul>
              <li>
                <NavLink
                  to="/dashboard"
                  style={({ isActive }) => ({
                    color: isActive ? "#fff" : "#FFF",
                    borderBottom: isActive ? "1px solid #eee" : "transparent",
                  })}
                >
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/customers"
                  style={({ isActive }) => ({
                    color: isActive ? "#fff" : "#FFF",
                    borderBottom: isActive ? "1px solid #eee" : "transparent",
                  })}
                >
                  Customers
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/products"
                  style={({ isActive }) => ({
                    color: isActive ? "#fff" : "#FFF",
                    borderBottom: isActive ? "1px solid #eee" : "transparent",
                  })}
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/profile"
                  style={({ isActive }) => ({
                    color: isActive ? "#fff" : "#FFF",
                    borderBottom: isActive ? "1px solid #eee" : "transparent",
                  })}
                >
                  Profile
                </NavLink>
              </li>
            </ul>
          </nav>
          <div class="icons">
            <SearchIcon size={18} fill="#FFF" />
            <img src={Logo} alt="logo" />
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/dashboard" element={<Main />}></Route>
        <Route path="/dashboard/customers" element={<Customers />}></Route>
        <Route path="/dashboard/products" element={<Dashboard />}></Route>
      </Routes>
    </Router>
  );
}
