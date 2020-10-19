
import React, {useEffect, useState} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import notFoundPage from './pages/NotFoundPage'
import Header from './Header'
import Community from "./community/Community";
import LFG from "./lfg/LFG";
import Setting from "./settings/Setting";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Chat from "./chat/Chat";
import Context from "./Context";
import Party from "./party/Party";
import "../styles/darkmode.css"
import UserPage from "./UserPage";


const AppRouter = () => {
    const [slideState, setSlideState] = useState("sidebar");
    const [auth, setAuth] = useState(false);
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if(user){
            setAuth(true)
        }
    },[])
    const toggleSlide = () => {
        setSlideState(!slideState)
    }



    return (
        <BrowserRouter>
            <div>
                <Context.Provider value={{slideState, toggleSlide, auth, setAuth}}>
                <Header />
                <Switch>
                    <Route path={["/", "/community"]} component={Community} exact={true}  />
                    <Route path="/lfg" component={LFG} />
                    <Route path="/party" component={Party} />
                    <Route path="/chat" component={Chat}  />
                    <Route path="/register" component={Register} />
                    <Route path="/login" component={Login} />
                    <Route path="/setting" component={Setting} />
                    <Route path="/user" component={UserPage} />
                    <Route component={notFoundPage} />
                </Switch>
                </Context.Provider>
            </div>

        </BrowserRouter>
    )
}

export default AppRouter