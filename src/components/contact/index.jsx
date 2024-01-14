import React from 'react'
// import bg from '../../assets/images/contact-bg.jpg'
import email from '../../assets/images/contact-icon-01.png'
import phone from '../../assets/images/contact-icon-02.png'
import map from '../../assets/images/contact-icon-03.png'
import './index.css'

const Contact = () => {
    return (
        <div className='mt-[100px]'>
            <section id='contact' className='contact__section mt-6 sm:mt-10 md:mt-16 lg:mt-[120px]'>
                <div className='contact__container'   data-aos="fade-up">
                    <div className='contact__texts'>
                        <p className='contact__name'>CONTACT US</p>
                        <p className='contact__text'>Fill Out The Form Below To <span className='text-[#088ec3]'>Get</span> In <span className='text-[#33ccc5]'>Touch</span> With Us</p>

                    </div>
                    <div className='contact__content'>
                        <div className='input__container'>
                            <div className='inputs'>
                                <input className='input' type="text" placeholder='Name' name="" id="" />
                                <input className='input' type="text" placeholder='Surname' name="" id="" />
                            </div>
                            <div className='inputs'>
                                <input className='input' type="text" placeholder='Your email' name="" id="" />
                                <input className='input' type="text" placeholder='Subject' name="" id="" />
                            </div>
                            <textarea className='contact__textarea focus:border-[2px] focus:shadow-sm focus:shadow-[#a9f0ff] focus:border-[#a9f0ff]' placeholder='Message' name="Message" id="" cols="30" rows="10"></textarea>
                            <button className='contact__btn'>Send Message Now</button>
                        </div>
                        <div className='contact__card-content'>
                            <div className='contact__card'>
                                <div className='grid justify-center'>
                                    <img className='contact__card-icon' src={email} alt="" />

                                </div>
                                <p className='contact__card-text'>info@company.com</p>
                            </div>
                            <div className='contact__card'>
                                <div className='grid justify-center'>
                                    <img className='contact__card-icon' src={phone} alt="" />

                                </div>
                                <p className='contact__card-text'>+001-002-0034</p>
                            </div>
                            <div className='contact__card'>
                                <div className='grid justify-center'>
                                    <img className='contact__card-icon' src={map} alt="" />
                                </div>
                                <p className='contact__card-text'>26th Street, Digital Villa</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact