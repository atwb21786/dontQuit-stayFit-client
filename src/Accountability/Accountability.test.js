import React from 'react'; 
import ReactDOM from 'react-dom';
import Accountability from './Accountability';

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Accountability />, div);
    ReactDOM.unmountComponentAtNode(div);
});