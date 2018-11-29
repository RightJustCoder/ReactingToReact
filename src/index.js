import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

ReactDOM.render(
    <App pizza='Text passed from index.js -- with extra cheese!' />, document.getElementById('root')
);