import React from 'react'
import { Link } from 'react-router-dom'
// import AuthLayout from '../../Components/AuthLayout'

function Login() {
    return (
        <div className='auth '>
            <section class="form__section p-5">
                <div class="container form__section-container p-5">
                    <center className='mb-4'><h2>Sign In</h2></center>
                    <form className="">
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control inputts" id="floatingInput3" placeholder="name@example.com" />
                            <label for="floatingInput">Email address</label>
                        </div>
                        <div class="form-floating">
                            <input type="password" class="form-control inputts" id="floatingInput4" placeholder="Password" />
                            <label for="floatingPassword">Password</label>
                        </div>

                        <button type="submit" class="btn bn632-hover bn19 w-100 m-0 mt-4" >
                            Sign In
                        </button>
                        <small>Don't have an account ? <Link to="/auth/register"> <span>Sign Up</span></Link> </small>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Login