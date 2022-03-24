import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Home = () => (
  <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" to="#">Charts</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" exact  to="/">Home</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" to="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Link</a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" ><Link className="dropdown-item" to="/pei-chart" target="_blank">Pei Chart</Link></a></li>
            <li><a className="dropdown-item" ><Link className="dropdown-item" to="/Bar-chart">Bar Chart</Link></a></li>
            <li><a className="dropdown-item" ><Link className="dropdown-item" to="/topics">Topics</Link></a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Charts
          </a>
      
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" ><Link className="dropdown-item" to="/pei-chart" target="_blank">Pei Chart</Link></a></li>
            <li><a className="dropdown-item" ><Link className="dropdown-item" to="/Bar-chart">Bar Chart</Link></a></li>
            <li><a className="dropdown-item" ><Link className="dropdown-item" to="/topics">Topics</Link></a></li>
          </ul>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li> */}
      </ul>
     
    </div>
  </div>
</nav>
    
  </div>
);

export default Home;
