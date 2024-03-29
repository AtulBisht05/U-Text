import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import '../App.css';


const Navbar = (props) => {
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode}  bg-body-${props.mode} navbar-${props.mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/home">
                    <img  src="../icone.png" className="img-thumbnail mx-2" alt="icon" />
                        {props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/about">About</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link active" to="/contact">Contact us</Link>
                            </li> */}


                        </ul>


                        <div className="form-check form-switch">
                            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="Check" />
                            <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault"> Dark mode</label>
                        </div>


                    </div>
                </div>
            </nav>
  )
}

export default Navbar

//user define prop
Navbar.prototype = {

    //
    title: PropTypes.string.isRequired

}

//default Prop type
Navbar.defaultProps = {
    title: "UT"
}