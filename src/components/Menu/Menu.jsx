import React from 'react';
import './Menu.css';

const Menu = ({active,setActive,items}) => {
    return (
        <div className={active? `menu active`: 'menu'} onClick={()=>setActive(false)}>
            <div className="blur"/>
            <div className="menu__content" onClick={e=>e.stopPropagation()}>
                {
                    <ul>
                        {items.map(item=>
                            <li>
                                <a href="#">{item}</a>
                            </li>
                        )}
                    </ul>
                }
                <div className="header__sidebar__buttons">
                    <button className="log__in">LOGIN</button>
                    <button className="sign__in">SIGN IN</button>
                </div>
            </div>
        </div>
    );
};

export default Menu;