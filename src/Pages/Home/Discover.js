import React from 'react'
import Img1 from '../../Assets/image/Image (2).png'
import Img2 from '../../Assets/image/Image (3).png'
import Img3 from '../../Assets/image/Image (4).png'

function Discover() {
    return (
        <div>
            <div className="container">
                <div className="Discover mt-5 mb-5">
                    <center>
                        <div className="header mb-5">
                            <h2>Discover the latest news.</h2>
                            <p>Stay informed and inspired with valuable insights for business growth.</p>
                        </div>
                    </center>
                    <div className="row">
                        <div className="col-md-4 mb-3">
                            <div className="each">
                                <img src={Img1} alt="" />
                                <span className='pt-4 pb-4'>2 Minutes Ago</span>
                                <h4>Unleash the Power of Advanced Analytics</h4>
                                <p>Modern a Minimal and Clean Personal Portfolio Template for Framer.</p>
                                <button className='bn633-hover bn21'>Read more <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                </svg>
                                </button>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <div className="each">
                                <img src={Img2} alt="" />
                                <span className='pt-4 pb-4'>2 Minutes Ago</span>
                                <h4>Unleash the Power of Advanced Analytics</h4>
                                <p>Modern a Minimal and Clean Personal Portfolio Template for Framer.</p>
                                <button className='bn633-hover bn21'>Read more <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                </svg>
                                </button>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <div className="each">
                                <img src={Img3} alt="" />
                                <span className='pt-4 pb-4'>2 Minutes Ago</span>
                                <h4>Unleash the Power of Advanced Analytics</h4>
                                <p>Modern a Minimal and Clean Personal Portfolio Template for Framer.</p>
                                <button className='bn633-hover bn21'>Read more <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Discover