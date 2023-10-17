import React from 'react'
import Searchany from './Searchany';
import homeimg from '../img/home.gif'



function Homepage() {
    return (
        <>
            <Searchany name='Connecting Businesses in Pixels' imgsrc={homeimg} visit='/service' btnname='Get Start' />
        </>

    )
}

export default Homepage