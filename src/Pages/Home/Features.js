import React from 'react'
import Img1 from '../../Assets/image/Frame 163462.png'
import Img2 from '../../Assets/image/Frame 163462 (1).png'
import Img3 from '../../Assets/image/Frame 163462 (2).png'

function Features() {
    return (
        <div>
            <div className="container">
                <div className="Features animate__animated animate__backInUp">
                    <center >
                        <div className="header">
                            <h1>More Features</h1>
                            <p className='f15'>These are a few of the key features of AITool that distinguishit from other AI platforms</p>
                        </div>
                    </center>
                    <div className="each mt-5">
                        <div className="row mb-3">
                            <div className="col-md-4 mb-3">
                                <img src={Img1} alt="" />
                                <h4>Create command</h4>
                                <p>Enables users to locate solutions to their inquiries without browsing numerous resources.</p>
                            </div>
                            <div className="col-md-4 mb-3">
                                <img src={Img2} alt="" />
                                <h4>Improve everyday</h4>
                                <p>The app uses natural language processing to understand user queries and provide accurate and relevant responses.</p>
                            </div>
                            <div className="col-md-4 mb-3">
                                <img src={Img3} alt="" />
                                <h4>Connect everywhere</h4>
                                <p>Connect with the AI tool from anywhere, on any device, making it more accessible and convenient.</p>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-4 mb-3">
                                <img src={Img1} alt="" />
                                <h4>Create command</h4>
                                <p>Enables users to locate solutions to their inquiries without browsing numerous resources.</p>
                            </div>
                            <div className="col-md-4 mb-3">
                                <img src={Img2} alt="" />
                                <h4>Improve everyday</h4>
                                <p>The app uses natural language processing to understand user queries and provide accurate and relevant responses.</p>
                            </div>
                            <div className="col-md-4 mb-3">
                                <img src={Img3} alt="" />
                                <h4>Connect everywhere</h4>
                                <p>Connect with the AI tool from anywhere, on any device, making it more accessible and convenient.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features