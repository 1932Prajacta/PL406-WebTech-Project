import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import { auth, provider } from '../firebase'
import { useStateValue } from '../StateProvider'
import { actionTypes } from '../Reducer'

const Login = () => {
    const [state, dispatch] = useStateValue()

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(result => {
                console.log(result)

                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })

            }).catch(error => alert(error.message))
    }
    return (
        <div className='login' style={{ backgroundImage: "url(/bg.png)" ,backgroundRepeat:"no-repeat" ,backgroundAttachment: "fixed", backgroundPosition: "center"}} >
            <div className="login__logo">
                <img src="/logo.png" alt="Sans-Logo" />
            </div>
            <Button type='submit' onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login