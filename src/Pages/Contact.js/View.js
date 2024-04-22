import React from 'react'
import Navbar from '../../Components/Navbar'
import ContactCard from '../../Components/ContactCard'
import Footer from '../../Components/Footer'
import Icon from '../../Assets/image/male.png'

function View() {
    return (
        <div>
            <Navbar />
            <div className="view">
                <div className=' '>
                    <section class=" p-5">
                        <div class="container form__section-container p-5">
                            <center className='mb-4'>
                                <img src={Icon} className='w-20' alt="" />
                            </center>
                            <div>
                                <div className="each">
                                    <p className='sub'>First Name :</p>
                                    <p className='value'>Emmanuel </p>
                                </div>
                                <div className="each">
                                    <p  className='sub'>Last Name :</p>
                                    <p className='value'>Tim</p>
                                </div>
                                <div className="each">
                                    <p  className='sub'>Phone Number :</p>
                                    <p className='value'>090647538766</p>
                                </div>
                                <div className="each">
                                    <p  className='sub'>Date Created :</p>
                                    <p className='value'>04-02-2024</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <ContactCard />
            <Footer />
        </div>
    )
}

export default View