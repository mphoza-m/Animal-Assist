import '../index.css'
import Icon from '../assets/icon.png'
import Profile from '../assets/profile.png'
import LogoutImage from '../assets/logout.png'
import HomePageImage from '../assets/HomePageImage.png'
import { useState } from 'react'
import NavBar from './NavBar'

function LandingPage(){

    return (<div className="is-flex is-flex-direction-column">
        <div>
            <NavBar/>
        </div>
        <div className="is-flex is-flex-direction-row is-justify-content-center mt-6">
            <figure>
                <img className='is-rounded' src={HomePageImage} alt=''/>
            </figure>
        </div>
    </div>)
}

export default LandingPage;