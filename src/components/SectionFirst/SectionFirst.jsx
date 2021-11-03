import Aos from 'aos';
import React from 'react';
import ExploreButton from '../UI/ExploreButton/ExploreButton';
import './SectionFirst.css';
Aos.init();

const blocksInfo = [
    {
        title:'GET INSPIRED',
        body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fringil. lacus eget consequat tincidunt, lectus ex.'
    },
    {
        title:'CHALLENGE YOURSELF',
        body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fringil. lacus eget consequat tincidunt, lectus ex.'
    }
]
const SectionFirst = () => {
    return (
        <div className='first'>
            <div className="first__left" data-aos='fade-right'>
                <div className="first__left__head" >
                    <h1>4 WEEK</h1>
                    <h3>Workout Plan</h3>
                </div>
                <p className='simple__text'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quae commodi necessitatibus, repudiandae itaque sed praesentium expedita amet, eligendi unde repellat, veniam quo dolores eos! Corporis, atque! Omnis, ratione autem?
                </p>
                <button className='pulse'>try for free</button>
            </div>
            <div className="first__right">
                <div className="first__right__woman" data-aos="fade-up"></div>
                <div className='first__rcont'>
                    {blocksInfo.map(item=>(
                        <div data-aos="zoom-out-right" key={`${item.title}`+10} className='first__right__block'>
                            <h3>{item.title}</h3>
                            <p className='simple__text'>{item.body}</p>
                            <ExploreButton/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SectionFirst;