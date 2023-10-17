import React from 'react'
import { useNavigate } from 'react-router-dom'
import error from '../img/error.gif'

function Errorpage() {
    const navigate = useNavigate();
    return (
        
            <div className=' p-3 mb-5  position-absolute top-50 start-50 translate-middle text-center'>
                <img src={error} alt='*' />
                <button className='btn btn-outline-dark ' onClick={() => { ('/') }}>Go back</button>
            </div>     
    )
}

export default Errorpage