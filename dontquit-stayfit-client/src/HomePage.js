import React from 'react'
import { Link } from 'react-router-dom'
import Goals from './Goals'
import Weight from './Weight'
import Fitness from './Fitness'
import Accountability from './Accountability'

class HomePage extends React.Component {
    render() {
        return(
            <div>
                <nav>
                    <Link to='/' >HOME</Link>
                    <Link to='' >LOGOUT</Link>
                </nav>
                <header>
                    <h2>DON'T QUIT STAY FIT!</h2>
                </header>
                <main>
                    <Link to='/goals' component={Goals}>GOALS</Link>
                    <Link to='/weight' component={Weight}>WEIGHT</Link>
                    <Link to='/fitness' component={Fitness}>FITNESS</Link>
                    <Link to='/accountability' component={Accountability}>
                        REVIEW TODAY, PLAN TOMORROW
                    </Link>
                </main>
            </div>
        )
    }
}

export default HomePage