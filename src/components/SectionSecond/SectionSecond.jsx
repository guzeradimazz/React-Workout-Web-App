import React from 'react';
import './SectionSecond.css';
import SeeMoreButton from '../UI/SeeMoreButton/SeeMoreButton';

const SectionSecond = () => {
    const sectionContent =[
        {
            title:'running',
            body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fringilla, lacus eget consequat ',
            classTag:'run'
        },
        {
            title:'lifting',
            body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fringilla, lacus eget consequat ',
            classTag:'lift'
        },
        {
            title:'yoga',
            body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fringilla, lacus eget consequat ',
            classTag:'yoga'
        }
    ]
    return (
        <div className='second'>
            <div className="second__head">
                <h1>latest training</h1>
                <p>SEE MORE HERE</p>
            </div>
            <div className="second__content">
                {sectionContent.map(item=>(
                    <div className='second__content__item'>
                        <div className={item.classTag}></div>
                        <h3>{item.title}</h3>
                        <p className='simple__text'>{item.body}</p>
                        <SeeMoreButton/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SectionSecond;