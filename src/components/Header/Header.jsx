import React from 'react';
import './Header.css'

const Header = () => {
    const headerNav =[
        'EXERCICES','COMMUNITY','PRICING','ABOUT US'
    ]
    return (
        <div className='header'>
            <div className='header__logo'></div>
            <div className="header__sidebar">
                <div className="header__sidebar__nav">
                    {headerNav.map(item=>(
                        <div className='header__sidebar__nav__item'>
                            {item}
                        </div>
                    ))}
                </div>
                <div className="header__sidebar__buttons">
                    <button className="log__in">LOGIN</button>
                    <button className="sign__in">SIGN IN</button>
                </div>
            </div>
        </div>
    );
};

export default Header;