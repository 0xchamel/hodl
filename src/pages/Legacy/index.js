import React, {useRef} from 'react';

import './Legacy.scss';

import image1 from '../../assets/img/collective/1c.png';
import image2 from '../../assets/img/collective/2c.png';
import {ERefs} from "../Home/refs.enum";
import arrowBottom from "../../assets/img/arrow-next.svg";

const LegacyPage = () => {

    const mainRef = useRef(null);
    const scrollToRef = (ref) =>
        window.scrollTo({
            top: ref.current.offsetTop,
            behavior: 'smooth',
        });

    const executeScroll = (type) => {
        return scrollToRef(mainRef);
    };
    return (
        <div className="crypto legacy">
            <div className="crypto__banner">
                <div className="row">
                    <div className="title-top">Dragon’s Vault</div>
                    <h1 className="h1">
                        Legacy Fund
                    </h1>
                    <img
                        onClick={() => executeScroll()}
                        className="home__inf--arrow"
                        src={arrowBottom}
                        alt=""
                    />
                </div>
            </div>

            <div>
                <div className="crypto__info" ref={mainRef}>
                    <div className="row crypto__info--row">
                        <div className="crypto__info--content">
                            <div className="crypto__info--text">
                                <h2 className="crypto__info--title">Current Initiatives</h2>
                                The Legacy Fund was developed to provide investment and support to noteworthy individuals,
                                teams or businesses with impactful technologies, inspired vision or business opportunities
                                that align with Dragon’s Vault mission and objectives.
                            </div>
                            <div className="crypto__info--image">
                                <h3 className="crypto__info--image_title">Legacy Awards</h3>
                                <div className="crypto__info--image_text">
                                    The Patrick Poirier, Solving the Impossible Award
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LegacyPage;
