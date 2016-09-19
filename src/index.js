import React from 'react';
import ReactDOM from 'react-dom';
import Routers from './routes';
import Marked from './marked';
import './main.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'highlight.js/styles/arduino-light.css'


// import './main.css';

ReactDOM.render(<Routers />, document.getElementById('app'));
