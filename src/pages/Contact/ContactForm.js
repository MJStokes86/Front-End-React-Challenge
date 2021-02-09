import React, { Component } from 'react'
import {ContactData} from './ContactFormData'
import './Contact.css'
import './Archivo-Regular.ttf'


class ContactForm extends Component {
    render() {
        return (
            <div className="contactFormContainer">

                    {ContactData.map((item, index) => {
                        return (
                        <form key={index} id="form">

                            <label>{item.label}</label>
                            <br/>
                                <input 
                                type= {item.type} placeholder={item.placeholder} value={item.value} className={item.class}id={item.id}/>

                        </form>
                        )
                    })}
                
                <button type="submit" class="btn" form="form"><span>Send Message</span> <i className="fa fa-arrow-right"></i></button>

                

            </div>
        )
    }
}


export default ContactForm