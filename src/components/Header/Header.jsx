import React,{useState} from 'react';
import Menu from '../Menu/Menu';
import './Header.css'


const Header = () => {
    const [active, setActive] = useState(false)
    const headerNav =[
        'EXERCICES','COMMUNITY','PRICING','ABOUT US'
    ]
    return (
        <div className='header'>
            <div className='header__logo'></div>
            <div className="header__sidebar">
                <div className="header__sidebar__nav">
                    {headerNav.map(item=>(
                        <div key={item+'elem'} className='header__sidebar__nav__item'>
                            {item}
                        </div>
                    ))}
                </div>
                <div className="header__sidebar__buttons">
                    <button className="log__in">LOGIN</button>
                    <button className="sign__in">SIGN IN</button>
                </div>
            </div>
            <div className="burger__btn" onClick={()=>setActive(!active)}>
                <span></span>
            </div>
            <Menu active={active} setActive={setActive} items={headerNav}/>
        </div>
    );
};

export default Header;