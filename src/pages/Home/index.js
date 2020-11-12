import React, { useRef } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import "react-multi-carousel/lib/styles.css";

import { Team, MediaSlider } from "../../components";

import "./Home.scss";

import performanceBackImg from "../../assets/img/performance/back.jpg";
import decor_1 from "../../assets/img/decor/1.svg";
import portfolioBtnImg from "../../assets/img/portfolio/btn.svg";
import arrowBottom from "../../assets/img/arrow-next.svg";
import portfolioArrowImg from "../../assets/img/portfolio/arrow.svg";
import { ERefs } from "./refs.enum";
import Article from "../../components/Article";

import articles from "../../constant/articles";

const scrollToRef = (ref) =>
  window.scrollTo({
    top: ref.current.offsetTop,
    behavior: "smooth",
  });

const HomePage = () => {
  const portfolio = [
    {
      text: "Human Capital",
      link: "human",
    },
    {
      text: "Collective Cash Flow",
      link: "collective",
    },
    {
      text: "Legacy Fund",
      link: "legacy",
    },
    {
      text: "Crypto Assets",
      link: "crypto",
    },
  ];

  const mainRef = useRef(null);
  const portfolioRef = useRef(null);
  const mediaRef = useRef(null);
  const teamRef = useRef(null);
  const disclaimersRef = useRef(null);
  const performanceRef = useRef(null);

  const executeScroll = (type) => {
    switch (type) {
      case ERefs.Home:
        return scrollToRef(mainRef);
      case ERefs.Profile:
        return scrollToRef(portfolioRef);
      case ERefs.Media:
        return scrollToRef(mediaRef);
      case ERefs.Team:
        return scrollToRef(teamRef);
      case ERefs.Disclaimers:
        return scrollToRef(disclaimersRef);
      case ERefs.Performance:
        return scrollToRef(performanceRef);
      default:
        return;
    }
  };

  return (
    <div className="home">
      <div className="home__main">
        <div className="row">
          <div className="title-top">Dragon’s Vault</div>
          <h1 className="h1">Safeguarding Humanity’s Financial Well-Being</h1>
          <img
            onClick={() => executeScroll(ERefs.Home)}
            className="home__inf--arrow"
            src={arrowBottom}
            alt=""
          />
        </div>
      </div>

      <div className="home__inf" ref={mainRef}>
        <div className="row">
          <p>
            <span>Dragon’s Vault</span> is&nbsp;a&nbsp;globally distributed
            investment portfolio composed of&nbsp;crypto-assets and venture
            capital. Our family of&nbsp;funds are optimized for<br></br>{" "}
            high-risks/high-returns and shielded against localized financial
            crisis and currency devaluation of&nbsp;specific regions of&nbsp;the
            world.
          </p>
          <img src={decor_1} alt="" />
          <div>
            <img
              onClick={() => executeScroll(ERefs.Profile)}
              className="home__inf--arrow"
              src={arrowBottom}
              alt=""
            />
          </div>
        </div>
      </div>

      <section id={"portfolio"} className="home__portfolio" ref={portfolioRef}>
        <div className="row home__portfolio-row">
          <h2 className="home__portfolio-title h2 h2--decor">Portfolio</h2>
          <div className="home__portfolio-box">
            {portfolio.map((card, index) => {
              return (
                <Link
                  key={index}
                  to={`/${card.link}`}
                  className="home__portfolio-card"
                >
                  <div
                    className={classNames("home__portfolio-card-box", {
                      "home__portfolio-card-box--reverse": index % 2,
                    })}
                  >
                    <img
                      src={require(`../../assets/img/portfolio/${
                        index + 1
                      }.jpg`)}
                      alt=""
                      className="home__portfolio-card-bg"
                    />
                    <div className="home__portfolio-card-content">
                      <img src={portfolioBtnImg} alt="" />
                      <p>{card.text}</p>
                    </div>
                  </div>
                  <div className="home__portfolio-card-text">
                    <span>{card.text}</span>
                    <img src={portfolioArrowImg} alt="" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      <section
        id={"performance"}
        className="home__performance"
        ref={performanceRef}
      >
        <div className="home__performance-row">
          <h2 className="home__performance-title h2 h2--decor">Performance</h2>
          <div className="home__performance-content">
            <img src={performanceBackImg} alt="performance back" />
            <div className="timeline">
              <p>Time Line:</p>
              <ul>
                <li>Dragon's Vault began investing in June 2020</li>
                <li>Dragon's Vault incorporates in Singapore Sep 2020</li>
              </ul>
              <h1>
                Dragon's Vault innovative investment portfolio has experienced a
                X% ROI since it's inception in June of 2020.
              </h1>
            </div>
            <div className="bottom">
              <h2>
                Making Dragon's Vault one of the top
                <br />
                <p>performing investment funds globally period.</p>
              </h2>
            </div>
          </div>
        </div>
      </section>
      <div id={"team"} ref={teamRef}>
        <Team />
      </div>
      <section id={"media"} className="home__media" ref={mediaRef}>
        <div className="row">
          <div className="h2 home__media-title h2--decor">Media</div>
          <div className="home__media-video">
            <MediaSlider />
          </div>
          {/* <div className="h2 home__media-title" style={{ marginTop: "2rem" }}>
            Articles
          </div> */}
          <div className="home__media-article">
            {articles.map((item) => {
              return (
                <Article
                  title={item.title}
                  image={item.image}
                  link={item.link}
                />
              );
            })}
          </div>
        </div>
        <div className="row"></div>
      </section>
      <section
        id={"disclaimers"}
        className="home__disclaimers"
        ref={disclaimersRef}
      >
        <div className="row">
          <div className="h2 home__disclaimers-title h2--decor">
            Disclaimers
          </div>
          <p className="home__disclaimers-description">
            This website and the content published on it are solely owned and
            copyrighted by Dragon’s Vault Pte Ltd. All rights are fully
            reserved.
            <br /> To the maximum extent permitted by applicable law, all
            services and content on our website are provided “as is” and without
            warranty or representation of any kind. Information received through
            our website should not be relied on for personal, legal, investment
            or financial decisions. We are not liable for decisions influenced
            by our website content.
            <br /> To the maximum extent permitted by applicable law, in no
            event shall we be liable for any damages whatsoever including
            without limitation, damages for loss of use, data, or profits.{" "}
            <br />
            This website does not constitute an offer or solicitation to sell
            any assets, crypto currencies, virtual coins and/or securities. No
            information or opinions presented herein are intended to form the
            basis for any purchase or investment decision, and no specific
            recommendations are intended. Accordingly, this website does not
            constitute investment advice, recommendation or counsel or a
            solicitation for investment. Any such offer or solicitation will be
            made only by means that are in compliance with applicable securities
            and other laws. As such, this website does not constitute or form
            part of, and should not be construed as, any offer for sale or
            subscription of, or any invitation to offer to buy or subscribe for,
            any securities or assets, nor should it or any part of it form the
            basis of, or be relied on in any connection with, any contract or
            commitment whatsoever.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
