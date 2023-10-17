import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../img/logo.jpg'

function Navbar() {
  return (

    <div className='container-fluid nav-bg' >
      <div className='row ' >
        <div className='col-10 mx-auto'>
          <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
              <NavLink  className="navbar-brand " to="/">
                <img   src={logo} height={50} width={150} alt='/' />
              </NavLink>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                <li className="nav-item">
                  <NavLink  className="nav-link  " to="/">Home</NavLink>
                  </li>

                  <li className="nav-item">
                  <NavLink  className="nav-link  " to="/service">Service</NavLink>
                  </li>
                  <li className="nav-item">
                  <NavLink  className="nav-link  " to="/about">About</NavLink>
                  </li>


                  <li className="nav-item">
                  <NavLink  className="nav-link  " to="/contact_us">Contact_us</NavLink>
                  </li>

                </ul>

              </div>
            </div>
          </nav>
        </div>

      </div>
    </div>

  )
}

export default Navbar