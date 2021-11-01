import React from 'react';
import ExploreButton from '../UI/ExploreButton/ExploreButton';
import './SectionFirst.css';

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
            <div className="first__left">
                <div className="first__left__head">
                    <h1>4 WEEK</h1>
                    <h3>Workout Plan</h3>
                </div>
                <p className='simple__text'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quae commodi necessitatibus, repudiandae itaque sed praesentium expedita amet, eligendi unde repellat, veniam quo dolores eos! Corporis, atque! Omnis, ratione autem?
                </p>
                <button>try for free</button>
            </div>
            <div className="first__right">
                <div className="first__right__woman"></div>
                <div style={{width:'40%', display:'flex',flexDirection:'column',justifyContent:'space-around'}}>
                    {blocksInfo.map(item=>(
                        <div className='first__right__block'>
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