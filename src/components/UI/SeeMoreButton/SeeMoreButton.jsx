import React from 'react';
import './SeeMoreButton.css';

const SeeMoreButton = ({classNameTag}) => {
    return (
        <button className={`see__more__button ` + classNameTag}>
            see more
        </button>
    );
};

export default SeeMoreButton;