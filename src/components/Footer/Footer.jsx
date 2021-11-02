import React from 'react';
import Form from '../UI/Form/Form';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <hr />
            <div className="footer__content">
                <div className="footer__left">
                    <div className='header__logo'></div>
                    <div className="footer__left__icons">
                        <div className="elem"></div>
                        <div className="elem"></div>
                        <div className="elem"></div>
                        <div className="elem"></div>
                    </div>
                </div>
                <div className="footer__center">
                    <ul>
                        <li>info</li>
                        <li>about</li>
                        <li>careers</li>
                        <li>press</li>
                        <li>product</li>
                    </ul>
                    <ul>
                        <li>get in touch</li>
                        <li>about us</li>
                        <li>support</li>
                        <li>contact us</li>
                    </ul>
                </div>
                <div className="footer__right">
                    <Form/>
                </div>
            </div>
            <hr />
            <div className="footer__copyright">
                <p>Copyright 2021 Enisson Lemos | All right reserved</p>
                <p>Terms & Conditions</p>
            </div> 
        </div>

    );
};

export default Footer;