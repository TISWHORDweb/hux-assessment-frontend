import React from 'react'
import CautionImg from '../../Assets/image/Group 5647.png'
import { Link } from 'react-router-dom'

function TableAction() {

    return (
        <div>
            <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog ">
                    <div class="modal-content">
                        <div class="modal-body AlertModal p-5">
                            <div className=' '>
                                <section class="">
                                    <div class="container ">
                                        <center className='mb-4'><h2>Edit contact</h2></center>
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
                                                Edit contact
                                            </button>
                                        </form>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog ">
                    <div class="modal-content">
                        <div class="modal-body p-5">
                            <center>
                                <img src={CautionImg} alt="" className='w-20 mb-3' />
                                <p>Are you sure you want to Delete this contact ?</p>
                                <div className="buttonss">
                                    <button type="button" class="btn success bn633-hover bn21">Delete</button>
                                    <button type="button" class="btn cancel btnNoBg" data-bs-dismiss="modal">Cancel</button>
                                </div>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
            <div className="TableAction">
                <div className="dot">
                    <div className="svg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                        </svg>
                    </div>
                    <div className="firstDiv">
                        <ul>
                            <Link to="/app/contact/view/1"><li>View</li></Link>
                            <li data-bs-toggle="modal" data-bs-target="#editModal">Edit</li>
                            <li data-bs-toggle="modal" data-bs-target="#deleteModal">Delete</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TableAction