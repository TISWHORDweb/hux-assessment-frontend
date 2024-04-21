import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <div className="Navbar">
        <nav class="navbar navbar-expand-lg ">
          <div class="container">
            <span class="navbar-brand" href="#">REACH</span>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav m-auto mt-0 mb-2 mb-lg-0">
                <li class="nav-item">
                  <span class="nav-link " aria-current="page" >Home</span>
                </li>
                <li class="nav-item">
                  <span class="nav-link" href="#">Contact</span>
                </li>
              </ul>
              <div className="animate__animated animate__fadeInRight">
                <Link to="/auth/login">  <button class="bn632-hover bn21" type="submit">Get Started</button></Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar