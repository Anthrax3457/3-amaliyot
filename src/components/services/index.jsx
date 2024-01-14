import React from 'react'
import './index.css'
import img1 from '../../assets/images/service-icon-01.png'
import img2 from '../../assets/images/service-icon-02.png'
import img3 from '../../assets/images/service-icon-03.png'
const Services = () => {
    const data = [
        {
            img: img1,
            duration:1000,
            title: 'Similar Websites',
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dormque laudantium.'
        },

        {
            img: img2,
            duration:1500,
            title: 'Website Trends',
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dormque laudantium.'
        },
        {
            img: img3,
            duration:2000,
            title: 'Traffic Analysis',
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dormque laudantium.'
        },
        {
            img: img3,
            duration:2500,
            title: 'Optimizing Keywords',
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dormque laudantium.'
        },
        {
            img: img1,
            duration:3000,
            title: 'Page Optimizations',
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dormque laudantium.'
        },
        {
            img: img2,
            duration:3000,
            title: 'Deep URL Analysis',
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dormque laudantium.'
        },

    ]
    return (
        <div className='services__container '>
            <div   data-aos="zoom-in" className='services__content'>
                <p className='services__name'>OUR SERVICES</p>
                <p className='services__text'>Discover What We Do & <span className='text-[#088ec3]'>Offer</span> To Our <span className='text-[#33ccc5]'>Clients</span></p>
            </div>
            <div>
                <div className='services__data '>
                    {data.map((item, index) => {
                        return (
                            <div  data-aos="fade-up"
                            data-aos-duration={item.duration} className='services__data-content' key={index}>
                                <div className='grid justify-center items-center'>
                                    <div className='services_image-content '>
                                        <img className='services__image ' src={item.img} alt="" />
                                    </div>
                                </div>
                                <div className='services__items'>
                                    <p className='services__title'>{item.title} </p>
                                    <p className='services__data-text'>{item.text} </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Services