import React,{useState} from 'react';
import './SectionSecond.css';
import SeeMoreButton from '../UI/SeeMoreButton/SeeMoreButton';

const SectionSecond = () => {
    const sliderContent =[
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

    const [active, setActive] = useState(1)

    const nextSlide = ()=>{
        if(active !== sliderContent.length+1) setActive(active+1)
        if(active === sliderContent.length) setActive(1)
    }
    const prevSlide = ()=>{
        if(active !== 1) setActive(active-1)
        if(active === 1) setActive(sliderContent.length)
    }
    
    return (
        <div className='second'>
            <div className="second__head">
                <h1 data-aos="fade-right">latest training</h1>
                <p data-aos="fade-left">SEE MORE HERE</p>
            </div>
            <div className="slider">
                <div className='prev' onClick={prevSlide}></div>
                <div className="slider__content">
                    {
                        sliderContent.map((item,index)=>
                            <div 
                                key={`${item.title}`+10}  
                                className={active === index+1? 'second__content__item active__slide':'second__content__item'}
                            >
                                <div className={item.classTag}></div>
                                <h3>{item.title}</h3>
                                <p className='simple__text'>{item.body}</p>
                                <SeeMoreButton classNameTag='pulse' text='see more'/>
                            </div>
                        )
                    }
                </div>
                <div 
                    className="next"
                    onClick={nextSlide}
                ></div>
            </div>
            {/* <div className="second__content">
                {sectionContent.map(item=>(
                    <div key={`${item.title}`+10}  className='second__content__item'>
                        <div className={item.classTag}></div>
                        <h3>{item.title}</h3>
                        <p className='simple__text'>{item.body}</p>
                        <SeeMoreButton text='see more'/>
                    </div>
                ))}
            </div> */}
        </div>
    );
};

export default SectionSecond;