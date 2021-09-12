import React from 'react'
import ContactUs from '../HomeSection/ContactUs'
import Footer from '../HomeSection/Footer'
import "../styles/MServices.css"
import Section1 from './Section1'

const Services = () => {
    return (
        <div className="Mservice">
            <Section1/>
            <ContactUs/>
            <Footer/>
        </div>
    )
}

export default Services
