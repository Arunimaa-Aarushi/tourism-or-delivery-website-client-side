import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import initAuth from '../Firebase/Firebase.init';
import useAuth from '../Hooks/useAuth';
import Navbar from '../Navbar/Navbar';


initAuth()

const Login = () => {

    const { signInUsingGoogle } = useAuth()
    const location = useLocation();
    const history = useHistory();

    const redirectURL = location.state?.from || "/"
    console.log(redirectURL)
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirectURL)
            }) 
            .catch (error => console.log(error)) ;
    }
    return (
        <div>
            <Navbar />
            <h1 className="m-4 text-primary">LOG IN HERE</h1>


            <div>
                <button className="btn-primary" onClick={handleGoogleLogin}>Sign in with google</button>
            </div>
        </div>
    );
};

export default Login;