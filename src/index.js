import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Router from "./components/Router";
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css'

const Index = () => {

    return (
    <div>
            <Router />
    </div>
    )
    }




ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
