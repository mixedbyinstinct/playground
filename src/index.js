import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';

const Out = () => {
    return (
        <App />
    );
}

const root = ReactDOM.createDoot(document.getElementById('root'));
root.render(<Out />);