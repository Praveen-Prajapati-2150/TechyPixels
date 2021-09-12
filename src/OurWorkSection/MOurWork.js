import React from 'react'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import "../styles/MOurWork.css"
import ContactUs from '../HomeSection/ContactUs'
import Footer from '../HomeSection/Footer'
// import Particles from "react-particles-js";

const Work = () => {
    return (
        <div className="MOurWork">
            {/* <h1>in Work</h1> */}

            <Section1/>
            <Section2/>
            <Section3/>
            
            <ContactUs/>
            <Footer/>
        </div>
    )
}

export default Work
