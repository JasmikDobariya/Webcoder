import React from 'react'
import Searchany from './Searchany';
import aboutimg from '../img/about.gif'



function About() {
    return (
        <>
           <Searchany name='Building Your Digital Presence.' imgsrc={aboutimg} visit='/contact_us' btnname='Contact_Us' />
        </>
    )
}

export default About