import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import PeiChart from './components/PeiChart';
import BarChart from './components/BarChart';
import Home from './components/Home';
import Topics from './components/Topics';

const BasicExample = () => (
  <Router>
    <div>
      
      
      <Route exact path="/" component={Home} />
      <Route exact path="/pei-chart" component={PeiChart} />
      <Route exact path="/Bar-chart" component={BarChart} />
      <Route exact path="/topics" component={Topics} />
    </div>
  </Router>
);

render(<BasicExample />, document.getElementById('root'));
