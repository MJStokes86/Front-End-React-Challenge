import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './Contact.css'
import 'font-awesome/css/font-awesome.min.css'


class ContactNavbar extends Component {
    render() {
        return (
            <div className="contactNavbarContainer">

                <nav className="contactNav">

                    <ul className="contactNavLeft">
                        <li className="navItem">
                            <i className="fa fa-facebook-square" id="facebook">
                            </i>
                        </li>
                        <li className="navItem">
                            <i className="fab fa-instagram-square"
                            id="instagram">
                            </i>
                        </li>
                        <li className="navItem">
                            <i className="fa fa-twitter"
                            id="twitter">
                            </i>
                        </li>
                    </ul>

                    <div className="logo"> 
                        <Link to="/">
                            <img src= {process.env.PUBLIC_URL + 'assets/images/Logo.png'} />
                        </Link>
                    </div>

                    <ul className="contactNavRight">
                        <li className="navItem"><hr  id="line1"/>                       <hr id="line2"/>
                        </li>
                    </ul>

                </nav>

            </div>
        )
    }
}


export default ContactNavbar