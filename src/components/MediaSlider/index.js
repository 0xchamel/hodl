import React from "react";
import YouTube from "react-youtube-embed";
import Carousel from "react-multi-carousel";

import "./MediaSlider.scss";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30,
  },
};

const MediaSlider = () => {
  const videos = [
    {
      video: "iB3KC8U0eS4",
      title:
        "Venture Capital Insights in Europe, Asia, Middle East and Africa: Fintech and Blockchain",
    },
    {
      video: "H1mTLwEziX8",
      title:
        "Laws of Investments during the Pandemic: Blockchain & Decentralised Finance",
    },
    {
      video: "E6iT-qd6Z14",
      title: "VC Insights in Middle East: Entertainment, Gaming, and eSports",
    },
    {
      video: "bR40d0AFjs8",
      title:
        "Venture Capital Insights in Europe, Asia, Middle East and Africa: EduTech and EdTech",
    },
    {
      video: "Ag4hfhVCz1w",
      title:
        "Venture Capital Insights in Europe, Asia, Middle East and Africa: Worktech, Remotech",
    },
    {
      video: "kUDnnwQE7ko",
      title:
        "Venture Capital Insights in Europe, Asia, Middle East and Africa: Fintech and Blockchain",
    },
  ];

  return (
    <section className="media">
      <div className="media__box">
        <Carousel
          ssr
          deviceType="desktop"
          itemClass="media__item"
          responsive={responsive}
        >
          {videos.map((slide, index) => {
            return (
              <>
                <YouTube id={slide.video} />
                {/* <iframe
									title={slide.title}
									frameBorder="0"
									allowFullScreen=""
									width="100%"
									height="100%"
									src={`https://www.youtube.com/embed/${slide.video}`}
								></iframe> */}
              </>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
};

export default MediaSlider;
