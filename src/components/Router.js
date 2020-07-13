
import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'
import notFoundPage from '../components/NotFoundPage'
import Header from './Header'
import Community from "./Community";
import LFG from "./LFG";


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={Community} exact={true} />
                <Route path="/lfg" component={LFG} />
                <Route path="/friends"/>
                <Route path="/chat"  />
                <Route component={notFoundPage} />
            </Switch>
        </div>

    </BrowserRouter>
)

export default AppRouter