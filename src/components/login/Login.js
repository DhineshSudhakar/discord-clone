import { Button } from '@material-ui/core'
import React from 'react'
import { auth, provider } from '../../firebase'

import './Login.css'

function Login() {

    const signIn = () => {
        // login using google
        auth.signInWithPopup(provider)
            .catch((error) => alert(error.message))
    }
    return (
        <div className="login">
            <img className="login__logo" alt="" src="https://seeklogo.com/images/D/discord-logo-134E148657-seeklogo.com.png"
            />
            <Button onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login
