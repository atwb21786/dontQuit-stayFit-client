import React from 'react'; 
import ReactDOM from 'react-dom';
import Fitness from './Fitness';

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Fitness />, div);
    ReactDOM.unmountComponentAtNode(div);
});