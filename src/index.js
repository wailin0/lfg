import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./components/Header";
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/react-fontawesome/index'

const Index = () => (
    <div>
        <Header />
    </div>
)




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
