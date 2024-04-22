import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <div class="modal fade" id="createModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog ">
          <div class="modal-content">
            <div class="modal-body AlertModal p-5">
              <div className=' '>
                <section class="">
                  <div class="container ">
                    <center className='mb-4'><h2>Create contact</h2></center>
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
                        <input type="Number" class="form-control inputts" id="floatingInput3" placeholder="name@example.com" />
                        <label for="floatingInput">Email address</label>
                      </div>
                      <button type="submit" class="btn bn632-hover bn19 w-100 m-0 mt-4" >
                        Create
                      </button>
                    </form>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Navbar">
        <nav class="navbar navbar-expand-lg ">
          <div class="container">
          <Link to="/">
            <span class="navbar-brand" href="#">REACH</span>
            </Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav m-auto mt-0 mb-2 mb-lg-0">
                <li class="nav-item">
                  <span class="nav-link " aria-current="page" >Home</span>
                </li>
                <li class="nav-item">
                  <Link to="/app/contact">
                    <span class="nav-link" >Contact</span>
                  </Link>
                </li>
                <li class="nav-item">
                  <span class="nav-link " aria-current="page" >Pricing</span>
                </li>
                <li class="nav-item">
                  <span class="nav-link " aria-current="page" >About us</span>
                </li>
              </ul>
              <div className="animate__animated animate__fadeInRight">
                <button class="bn632-hover bn21" type="submit" data-bs-toggle="modal" data-bs-target="#createModal">Get Started</button>
                {/* <Link to="/auth/login">  <button class="bn632-hover bn21" type="submit">Get Started</button></Link> */}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar