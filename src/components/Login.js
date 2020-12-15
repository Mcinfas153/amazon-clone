import React from 'react'
import './../styles/login.css'

function Login() {
    return (
        <div className="login">
            <img src="https://brandpalettes.com/wp-content/uploads/2018/08/Amazon.com-Logo-300x60.png" className="login__logo" />
            <div className="login__wrapper">
                <h1>Login</h1>
                <h4>Email or Phone Number</h4>
                <input type="text" />
                <h4>Password</h4>
                <input type="password" />
                <button type="submit">Login</button>
                <p>
                    By signing in, you agree to Amazon's Conditions of Use and Privacy Notice.
                </p>
            </div>
            <div class="a-divider a-divider-break"><h5>New to Amazon?</h5></div>
            <button type="submit" className="login__registerBtn">Create New Account</button>

        </div>
    )
}

export default Login
