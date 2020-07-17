
import React from 'react'
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'
import notFoundPage from '../components/NotFoundPage'
import Header from './Header'
import Community from "./Community";
import LFG from "./LFG";
import Setting from "./Setting";


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={Community} exact={true}  />
                <Route path="/lfg" component={LFG} />
                <Route path="/friends"/>
                <Route path="/test"  />
                <Route path="/setting" component={Setting} />
                <Route component={notFoundPage} />
            </Switch>
        </div>

    </BrowserRouter>
)

export default AppRouter