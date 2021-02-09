import React, {Component} from 'react'
import ContactNavbar from './ContactNavbar'
import ContactForm from './ContactForm'
import './Contact.css'

class Contact extends Component {
    render() {
        return (
            <div className="contactContainer">
                <ContactNavbar />
                <ContactForm />

            </div>
        )
    }
}


export default Contact