import React from 'react';
import ReactDOM from 'react-dom';
import background from './background.jpg';
import './app.css';

ReactDOM.render(
  <div className="content">
    <img className="background" src={background} alt="night mountains" />
    <h1>Bundlers Comparison</h1>
    <p>HTML, CSS, Images & JS all loaded?</p>
  </div>,
  document.getElementById('app'),
);
