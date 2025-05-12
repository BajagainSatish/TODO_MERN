import React from 'react'
import {Link} from 'react-router-dom'
import Hero from '../../assets/images/todoimage.png'
import './Landing.css'

const Landing = () => {
    return (
        <div className="hero">
            <div className="intro-text">
                <h1>
                    <span className='tagline1'>Organize work and life</span>
                    <br/>
                    <span className='tagline2'>finally.</span>
                </h1>
                <p>
                    type just anything into the task field and todolist
                    <br/>
                    on of lkjsldj fill to do lista
                </p>
                <Link className='btn red' to = "/register">Register Now!</Link>
                <Link className='btn blue' to = "/login">Login</Link>

            </div>

            <div className = "">
                <img src={Hero} alt="todoimage" style={{ maxHeight: '100%', width: '100%', objectFit: 'contain' }} />
            </div>

        </div>
    )
}

export default Landing
