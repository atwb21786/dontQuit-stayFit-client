import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import TokenService from '../Service/token-service'

class Header extends React.Component {

    handleLogoutClick = () => {
        TokenService.clearAuthToken()
        this.props.history.push('/')
    }

    renderLogoutLink() {
        return (
            <div>
                <Link onClick={this.handleLogoutClick} to='/' className='nav-link logout'>LOGOUT</Link>
            </div>
        )
    }

    render() {
        return(
            <div>
                <nav>
                    <Link to='/homepage' className='nav-link home'>HOME</Link>
                    <h2 className="headtitle">DON'T QUIT STAY FIT!</h2>
                    {TokenService.hasAuthToken() ? this.renderLogoutLink() : "" }
                </nav>
            </div>
        )
    }
}

export default Header