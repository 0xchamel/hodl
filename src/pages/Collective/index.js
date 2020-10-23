import React, {useRef} from 'react';

import './Collective.scss';

import image1 from '../../assets/img/collective/1c.png';
import image2 from '../../assets/img/collective/2c.png';
import {ERefs} from "../Home/refs.enum";
import arrowBottom from "../../assets/img/arrow-next.svg";

const CryptoPage = () => {

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
        <div className="crypto collective">
            <div className="crypto__banner">
                <div className="row">
                    <div className="title-top">Dragon’s Vault</div>
                    <h1 className="h1">
                        Collective<br/>
                        Cash Flow
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
                                Dragon’s Vault offers startups an innovative collective cash flow service that can significantly extend your runway without costing additional equity.
                                Any excess funds are invested to collect a return on investment.
                                Your money and the money of other of our clients will be invested collectively, which means your risks are spread amongst the community in a diversified fashion.
                                <br />
                                <br />
                                We guarantee the safe return of your initial investment + an additional return based on the return of our fund. We also offer you back-office services at cost including CFO, bookkeeping, accounting.
                                <br />
                                <br />
                                In certain circumstances, we will also extend an offer of investments in exchange for some equity in your business.
                                Our current payout structure is 60% per year on your capital the first year.
                            </div>
                        </div>
                        <div className="crypto__info--image">
                            <img className="crypto__info--image_img" src={image1} alt="" />
                        </div>
                    </div>
                    <div className="crypto__bottom-img">
                        <div className="row">
                            <img className="crypto__bottom-img_img" src={image2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CryptoPage;
