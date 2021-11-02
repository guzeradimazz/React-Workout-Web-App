import React from 'react';
import './Form.css';
import SeeMoreButton from '../SeeMoreButton/SeeMoreButton';

const Form = () => {
    return (
        <div className='form'>
            <h1>subscribe to our newsletter</h1>
            <form action="">
                <input type="text" placeholder='Type your email here'/>
            </form>
            <SeeMoreButton text='subscribe'/>
        </div>
    );
};

export default Form;