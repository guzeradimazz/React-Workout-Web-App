import React from 'react';
import './SeeMoreButton.css';

const SeeMoreButton = ({classNameTag,text}) => {
    return (
        <button className={`see__more__button ` + classNameTag}>
            {text}
        </button>
    );
};

export default SeeMoreButton;