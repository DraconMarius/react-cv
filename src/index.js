import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import 'bulma/css/bulma.min.css';
import "@creativebulma/bulma-collapsible/dist/css/bulma-collapsible.min.css";
import './index.scss';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <App />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
