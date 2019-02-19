import React from "react";

function Navbar({ clientsConnected }) {
  return (
    <nav className="navbar">
      <a href="/" className="navbar-brand">
        Chatty
      </a>
      <p className="navbar-clients">
        {clientsConnected} users online
      </p>
    </nav>
  );
}

export default Navbar;
