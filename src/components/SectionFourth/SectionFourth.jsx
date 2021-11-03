import Aos from 'aos';
import React from 'react';
import './SectionFourth.css';
Aos.init()
const SectionFourth = () => {
    return (
        <div className='fourth'>
            <div className="fourt__content">
                <h1 className="fourth__title" data-aos="fade-up">
                    DISCOVER YOUR POTENCIAL
                </h1>
                <p className="fourth__body">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.  text of the printing and typesetting
                </p>
                <div className="fourth__btns">
                    <button className='pulse'>view plans</button>
                    <button className='pulse'>learn more</button>
                </div>
            </div>
        </div>
    );
};

export default SectionFourth;