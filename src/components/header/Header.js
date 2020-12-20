import React from 'react'
import '../../styles/header.scss'
import logo from '../../images/logo.svg'
import { Link } from 'react-scroll'
import { NavLink } from 'react-router-dom'

const Header = () => {

    // window.addEventListener('scroll', function () {
    //     document.querySelector('.nav').classList.toggle('sticky', this.scrollY > 0)
    // })

    return (
        <div className="header-container" id="header">

            <div className="nav">

                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                
                <div className="hamburger">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>

                <ul className="nav-links">
                    <li>
                        <Link
                            activeClass="active"
                            to="header"
                            spy={true}
                            smooth={true}
                            duration={1000}
                            delay={200}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link 
                            activeClass="active"
                            to="services"
                            spy={true}
                            smooth={true}
                            duration={1000}
                            delay={200}
                        >
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link  
                            activeClass="active"
                            to="footer"
                            spy={true}
                            smooth={true}
                            duration={1000}
                            delay={200}
                        >
                            Contact
                        </Link>
                    </li>
                    <li>
                        <NavLink to='/teacherauth' exact className="route">Teacher</NavLink>
                    </li>
                    <li>
                        <NavLink to='/student' exact className="route">Student</NavLink>
                    </li>
                </ul>

            </div>

            <div className="header-content">
                <div>
                    <h4>Student Management App</h4>

                    <p className="starter-btn">
                        Get Started
                    </p>
                </div>
            </div>

        </div>
    );
}

export default Header