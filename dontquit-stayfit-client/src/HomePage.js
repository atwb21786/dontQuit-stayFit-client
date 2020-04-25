import React from 'react'
import './Homepage.css'
import { Link } from 'react-router-dom'

class HomePage extends React.Component {

    render() {
        return(
            <div>
                <main>
                    <Link to='/goals' className="goalsLink">GOALS</Link>
                    <br/>
                    <Link to='/weight' className="weightLink">WEIGHT</Link>
                    <Link to='/fitness' className="fitnessLink">FITNESS</Link>
                    <br/>
                    <Link to='/accountability' className="feedbackLink">
                        REVIEW TODAY, PLAN TOMORROW
                    </Link>
                </main>
            </div>
        )
    }
}

export default HomePage