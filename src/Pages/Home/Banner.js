import React from 'react'
import BannerImg from '../../Assets/image/Image.png'

function Banner() {
  return (
    <div>
        <div className="container">
            <div className="Banner mb-5">
                <center>
                <div className="text mb-4 pt-5">
                    <h2 className='animate__animated animate__fadeInDown'>Exploring ML Algorithms for Healthcare Anomaly Detection</h2>
                    <p>In this exploration, we delve into machine learning (ML) algorithms tailored for anomaly detection within healthcare systems. By leveraging advanced ML techniques, we aim to develop robust models capable of identifying irregular patterns or outliers in medical data. These algorithms play a crucial role in enhancing healthcare analytics, enabling early detection of anomalies that may signify critical health issues or abnormalities in patient conditions.</p>
                    <div className="btns animate__animated animate__bounce">
                    <button class="bn632-hover bn21" type="">Get Started Free</button>
                    <button class="bn632-hover bn19" type="">Explore Feature</button>
                    </div>
                </div>
                <img src={BannerImg} alt="" />
                </center>
            </div>
        </div>
    </div>
  )
}

export default Banner