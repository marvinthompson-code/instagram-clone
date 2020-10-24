import React from 'react'
import {NavLink} from 'react-router-dom'

// components
import SignUpForm from './SignUpForm'

const SignUp = () => {

    return (
        <div className={"container"}>
            <SignUpForm/>
            <div className="jumbotron pitchJumbo">
            <small id="emailHelp" className="form-text text-muted nam">
              Already have an account? <span></span>
              <NavLink exact to={"/"}>
                Log In
              </NavLink>
            </small>
          </div>
        </div>
    )
}

export default SignUp;