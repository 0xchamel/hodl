import React from 'react';
import SwiperCore, { EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import './MediaSlider.scss'
import 'swiper/swiper.scss';

import arrowNextImg from '../../assets/img/arrow-next.svg';
import arrowPrevImg from '../../assets/img/arrow-prev.svg';

SwiperCore.use([EffectFade]);

const MediaSlider = () => {
    const videos = [
        {
            video: 'K8NDKD3gqRM',
            title: 'HODLC Deep Dive : a crypto-asset that prevents pump and dump manipulations'
        },
        {
            video: 'iB3KC8U0eS4',
            title: 'Venture Capital Insights in Europe, Asia, Middle East and Africa: Fintech and Blockchain'
        },
        {
            video: 'H1mTLwEziX8',
            title: 'Laws of Investments during the Pandemic: Blockchain & Decentralised Finance'
        },
        {
            video: 'E6iT-qd6Z14',
            title: 'VC Insights in Middle East: Entertainment, Gaming, and eSports'
        },
        {
            video: 'bR40d0AFjs8',
            title: 'Venture Capital Insights in Europe, Asia, Middle East and Africa: EduTech and EdTech'
        },
        {
            video: 'Ag4hfhVCz1w',
            title: 'Venture Capital Insights in Europe, Asia, Middle East and Africa: Worktech, Remotech'
        },
        {
            video: 'kUDnnwQE7ko',
            title: 'Venture Capital Insights in Europe, Asia, Middle East and Africa: Fintech and Blockchain'
        },
    ]


    const [swiper, setSwiper] = React.useState({})
    const [activeTitle, setActiveTitle] = React.useState(videos[0].title)
    const [leftTitle, setLeftTitle] = React.useState('')
    const [rightTitle, setRightTitle] = React.useState(videos[1].title)

    const handleSlideChange = (swiper) => {
        if (swiper) {
            setActiveTitle(videos[swiper.realIndex].title)
            videos[swiper.realIndex - 1] ? setLeftTitle(videos[swiper.realIndex - 1].title) : setLeftTitle('')
            videos[swiper.realIndex + 1] ? setRightTitle(videos[swiper.realIndex + 1].title) : setRightTitle('')
        }
    }

    return (
        <section className="media">
            <div className="media__title">{activeTitle}</div>

            <div className="media__box">
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    // effect="fade"
                    onSwiper={swiper => setSwiper(swiper)}
                    onSlideChangeTransitionEnd={handleSlideChange}
                >
                    {videos.map((slide, index) => {
                        return <SwiperSlide key={slide.video} virtualIndex={index}>
                            <iframe frameBorder="0" allowFullScreen="" width="100%" height="100%"
                                src={`https://www.youtube.com/embed/${slide.video}`}>
                            </iframe>
                        </SwiperSlide>;
                    })}
                </Swiper>
                <div className="media__btn media__btn--prev" onClick={() => swiper.slidePrev()}>
                    <img src={arrowPrevImg} alt="" />
                    <p>{leftTitle}</p>
                </div>
                <div className="media__btn media__btn--next" onClick={() => swiper.slideNext()}>
                    <img src={arrowNextImg} alt="" />
                    <p>{rightTitle}</p>
                </div>
            </div>
        </section>
    );
}

export default MediaSlider;
