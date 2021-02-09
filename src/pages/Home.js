import React, {Component} from 'react'
import '../App.css';
import '../fonts/Archivo-Bold.ttf';
import '../fonts/Archivo-Regular.ttf';
import Navbar from '../components/Navbar/Navbar';

class Home extends Component {
    render() {
        return (
            <div className="main">
                <Navbar />
  
                <div className="drone">
                <img src={process.env.PUBLIC_URL + 'assets/images/Drone-2.png'}  alt="Drone" />
                </div>

                <div className="F-210"><h1>F-210</h1></div>


                <div className="bottomText">
                <p className="fastestDrone">"The Fastest Drone on the planet"</p>
                <p className="wirecutter">"The Wirecutter"</p>
                </div>
  
            </div>
        )
    }
}



export default Home

