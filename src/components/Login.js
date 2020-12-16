import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './../config/firebase'
import './../styles/login.css'

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    const history = useHistory();

    const login = () => {
        auth.signInWithEmailAndPassword(email, password)
            .then((authUser) => {
                console.log(authUser)
                history.push('/')
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
            });
    }

    const register = () => {
        // here we can do some firebase shit
        auth.createUserWithEmailAndPassword(email, password)
            .then((authUser) => {
                history.push('/')
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                // ..
                console.log(errorMessage)
            });
    }

    return (
        <div className="login">
            <Link to="/">
                <img src="https://brandpalettes.com/wp-content/uploads/2018/08/Amazon.com-Logo-300x60.png" className="login__logo" />
            </Link>
            <div className="login__wrapper">
                <h1>Login</h1>
                <h4>Email or Phone Number</h4>
                <input type="text" onChange={e => setEmail(e.target.value)} />
                <h4>Password</h4>
                <input type="password" onChange={e => setPassword(e.target.value)} />
                <button type="submit" onClick={login}>Login</button>
                <p>
                    By signing in, you agree to Amazon's Conditions of Use and Privacy Notice.
                </p>
            </div>
            <div class="a-divider a-divider-break"><h5>New to Amazon?</h5></div>
            <button type="submit" className="login__registerBtn" onClick={register}>Create New Account</button>

        </div>
    )
}

export default Login
