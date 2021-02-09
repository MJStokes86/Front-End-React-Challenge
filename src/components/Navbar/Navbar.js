import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {NavItemsLeft, NavItemsRight} from './NavItems'
import './Navbar.css'


class Navbar extends Component {
    render() {
        return (
            <nav className="navbar-nav">

                <ul className="navbarLeft">
                    {NavItemsLeft.map((item, index) => {


                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                            {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>


                <div className="logo"> 
                    <Link to="/">
                        <img src= {process.env.PUBLIC_URL + 'assets/images/Logo.png'} />
                    </Link>
                </div>

                <ul className="navbarRight">
                    {NavItemsRight.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>

            </nav>

        )
    }
}





export default Navbar
