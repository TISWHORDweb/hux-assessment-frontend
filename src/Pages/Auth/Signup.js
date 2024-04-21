import React from 'react'

function Signup() {
    return (
        <div>
            <div className='auth '>
                <section class="form__section p-5">
                    <div class="container form__section-container p-5">
                        <center className='mb-4'><h2>Sign In</h2></center>
                        <form className="">
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control inputts" id="floatingInput1" placeholder="name@example.com" />
                                <label for="floatingInput">First Name</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="password" class="form-control inputts" id="floatingInput2" placeholder="Password" />
                                <label for="floatingInput">Last Name</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control inputts" id="floatingInput3" placeholder="name@example.com" />
                                <label for="floatingInput">Email address</label>
                            </div>
                            <div class="form-floating">
                                <input type="password" class="form-control inputts" id="floatingInput4" placeholder="Password" />
                                <label for="floatingPassword">Password</label>
                            </div>

                            <button type="submit" class="btn bn632-hover bn19 w-100 m-0 mt-4" >
                               Register
                            </button>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Signup