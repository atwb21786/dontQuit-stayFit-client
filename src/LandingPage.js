import React from 'react'
import './LandingPage.css'
import {Link} from 'react-router-dom'
import TokenService from './Service/token-service'

class LandingPage extends React.Component {

    
    render() {
        return (
            <div>
                <header>
                    <h2 className="title">DON'T QUIT STAY FIT!</h2>
                </header>
                <section className="welcome">
                    <p>
                    Welcome to the "Don't Quit Stay Fit" application! This app will allow you to input 
                    your fitness goals and data into one place! The app has 4 sections: Goals, Weight,
                    Exercise and Accountability. Within each section, you can add, edit and delete your
                    submissions.  Feel free to use our Demo Account to get comfortable with the application.
                    Otherwise, please register and sign in to get started!
                    </p>
                </section>
                {TokenService.hasAuthToken() ? (<>
                <section>
                    <Link to='/homepage' className='links'>HOME</Link>
                    
                </section>
                </>) : (<>
                <section>
                    <Link to='/login' className='links'>SIGN IN!</Link>
                    <Link to='/register' className='links'>REGISTER HERE!</Link>
                </section>
                <footer className="demo-data">
                    <p>Demo username: ABC</p>
                    <p>Demo password: 123</p>
                </footer>
                </>)}
                
                
            </div>
        )
    }
}

export default LandingPage