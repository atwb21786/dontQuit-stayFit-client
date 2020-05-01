import React from 'react'; 
import ReactDOM from 'react-dom';
import Goals from './Goals';

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Goals />, div);
    ReactDOM.unmountComponentAtNode(div);
});