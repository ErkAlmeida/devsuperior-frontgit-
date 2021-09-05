import React from "react";
import { Link } from 'react-router-dom';
import "./styles.scss";

const Title =() =>(
  <nav className="title-pages">
    <Link to="/" className="nav-logo-text">
      Bootcamp DevSuperior
    </ Link>
  </nav>
);

export default Title;