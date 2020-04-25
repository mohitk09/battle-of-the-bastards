import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">List of All battles</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/count" className="nav-link">Count of All battles</Link>
          </li>
          <li className="navbar-item">
          <Link to="/search" className="nav-link">Retrieve battle by attacker name or defender name </Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}