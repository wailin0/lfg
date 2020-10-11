import {useState} from "react";

const Auth = () => {
    const [authenticated, setAuthenticated] = useState(false)
    const user = JSON.parse(localStorage.getItem('user'));
    if(user){
        setAuthenticated(true)
    }
}

export default Auth