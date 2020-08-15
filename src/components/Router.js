
import React, {useState} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import notFoundPage from '../components/NotFoundPage'
import Header from './Header'
import Community from "./Community";
import LFG from "./LFG";
import Setting from "./Setting";
import Register from "./Register";
import CreateGroup from "./CreateGroup";
import Login from "./Login";
import Chat from "./Chat";
import Context from "./Context";


const AppRouter = () => {
    const [slideState, setSlideState] = useState("sidebar");
    const toggleSlide = () => {
        setSlideState(!slideState)
    }

    return (
        <BrowserRouter>
            <div>
                <Context.Provider value={{slideState, toggleSlide}}>
                <Header />
                <Switch>
                    <Route path="/" component={Community} exact={true}  />
                    <Route path="/lfg" component={LFG} />
                    <Route path="/friends"/>
                    <Route path="/chat" component={Chat}  />
                    <Route path="/community/create" component={CreateGroup} />
                    <Route path="/register" component={Register} />
                    <Route path="/login" component={Login} />
                    <Route path="/setting" component={Setting} />
                    <Route component={notFoundPage} />
                </Switch>
                </Context.Provider>
            </div>

        </BrowserRouter>
    )
}

export default AppRouter