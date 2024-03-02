import React, {useState, useEffect, createContext} from 'react'
import axios from 'axios';

const AuthContext = createContext();

function AuthContextProvider(props) {

    const [loggedIn, setLoogedIn] = useState(undefined);

    async function getLoggedIn() {
        const loggedInRes = await axios.get("http://localhost:5000/farmer/loggedIn");
        setLoogedIn(loggedInRes.data);
    }

    useEffect(() => {
        getLoggedIn();
    }, []);

    return (
        <AuthContext.Provider value={{loggedIn, getLoggedIn}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
export {AuthContextProvider}