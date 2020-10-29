import React, { useRef } from "react";

import "./Contest.scss";

import patrick1 from "../../assets/img/contest/patrick1.png";
import patrick2 from "../../assets/img/contest/patrick2.png";

import decor_1 from "../../assets/img/decor/1.svg";
import arrowBottom from "../../assets/img/arrow-next.svg";

const scrollToRef = (ref) =>
  window.scrollTo({
    top: ref.current.offsetTop,
    behavior: "smooth",
  });

const ContestPage = () => {
  const summaryRef = useRef(null);
  const infoRef = useRef(null);

  return (
    <div className="contest">
      <div className="contest__banner">
        <div className="row">
          <div className="title-top">Dragon’s Vault</div>
          <div className="contest__banner--name">The Patrick Poirier</div>
          <h1 className="h1">Solving the Impossible Award</h1>
          <div className="contest__banner--description">
            Enabling the Pursuit of Innovation
          </div>
          <img
            className="contest__summary--arrow"
            src={arrowBottom}
            alt=""
            onClick={() => scrollToRef(summaryRef)}
          />
        </div>
      </div>

      <div className="contest__summary" ref={summaryRef}>
        <div className="row">
          <p>
            Are you between 14 and 18 years old? Is your dream to change the
            world? Are you dedicated and determined to solving the biggest
            challenges humanity is facing?
            <br /> Then enter to win{" "}
            <span>a potential lifetime of funding</span>. The Patrick Poirier,
            Solving the Impossible Award, is granting a first commitment of US
            <span>$20,000</span>&nbsp; to kickstart a Trust Fund to finance you
            and your dream to solve the impossible.
          </p>
          <img src={decor_1} alt="" />
          <div>
            <img
              className="contest__summary--arrow"
              src={arrowBottom}
              alt=""
              onClick={() => scrollToRef(infoRef)}
            />
          </div>
        </div>
      </div>

      <div ref={infoRef}>
        <div className="contest__info">
          <div className="row contest__info--row">
            <div className="contest__info--content">
              <div className="contest__info--title text__left desktop">
                The Award
              </div>
              <div className="contest__info--text text__left">
                Dragon’s Vault and the Legacy Fund are pleased to announce the
                first award of its kind: &nbsp;
                <strong>
                  The Patrick Poirier, Solving the Impossible Award,
                </strong>
                &nbsp; to be offered to a young adult between the ages of 14 –
                18.
                <br />
                <br />
                The winner will be established as the beneficiary of a trust
                fund, with an initial amount of US$20,000. Potential follow-on
                contributions may be made to ensure lifelong support.
              </div>
            </div>
            <div className="contest__info--title text__left mobile">
              The Award
            </div>
          </div>

          <div className="row contest__info--row">
            <div className="contest__info--content">
              <div className="contest__info--title text__left desktop">
                The Purpose
              </div>
              <div className="contest__info--text text__left">
                We believe that today’s young adults are incredibly innovative,
                smart, and with the potential and capability to solve incredibly
                complex problems.
                <br />
                We are setting out to find these brilliant young minds wherever
                in the world they may be, from whatever circumstances they may
                come from; and, to support their lifetime endeavors and to free
                them from having to compromise financial or commercial
                constraints.
                <br />
                <br />
                We have long been inspired by the economic model represented in
                sci-fi such as ‘Star Trek’, where the pursuit of financial
                reward was abandoned for the joy and pleasure of pursuing
                personal accomplishments. Therefore, it is important to note
                that the trust will have clear rules and guidelines for how
                funds will be distributed. &nbsp;
                <a href="/terms">(See terms for more information)</a>
              </div>
            </div>
            <div className="contest__info--title text__left mobile">
              The Purpose
            </div>
          </div>

          <div className="row contest__info--row">
            <div className="contest__info--content">
              <div className="contest__info--title text__left desktop">
                How it works
              </div>
              <div className="contest__info--text text__left">
                On November 1, 2020, an amount of US$20,000 will be allocated on
                behalf of the future beneficiary, and managed by the Trustees,
                Dragon’s Vault as part of its Legacy Fund. This will allow the
                fund to begin to operate and grow during the application period,
                and until the announcement of the winner is made on (April 30,
                2021). Once the winner is selected, the recipient will be named
                the beneficiary of the fund.
              </div>
            </div>
            <div className="contest__info--title text__left mobile">
              How it works
            </div>
          </div>

          <div className="row contest__info--row">
            <div className="contest__info--content">
              <div className="contest__info--title text__left desktop">
                The Application Process
              </div>
              <div className="contest__info--text text__left">
                Submissions will be accepted between November 1st and March 31st
                2021.
                <br />
                Submissions must include a video and a written 500 word essay to
                be submitted through this&nbsp;<a href="/profile">form</a>.
                Please review the terms carefully prior to submitting your
                application.
                <br />
                <br />
                <div className="contest__info--subtext text__left">
                  <p>
                    <strong>The Video:</strong>&nbsp; The video must include a
                    short description of your passion for deep tech. The video
                    should be no longer than 2 minutes. No need for special
                    editing, effects or dramatizations. Just be yourself and be
                    genuine.
                  </p>

                  <p>
                    <strong>The Written Essay:</strong>&nbsp; The essay must
                    describe the challenges or struggles you have faced, and
                    what you have already accomplished to date. Simply use your
                    creativity and passion to tell us about yourself and how you
                    hope and want to change the world.
                  </p>
                </div>
              </div>
            </div>
            <div className="contest__info--title text__left mobile">
              The Application Process
            </div>
          </div>

          <div className="row contest__info--row">
            <div className="contest__info--content">
              <div className="contest__info--title text__left desktop">
                About Dragon’s Vault
              </div>
              <div className="contest__info--text text__left">
                Dragon’s Vault is a globally distributed investment portfolio
                composed of crypto-assets and venture capital. Dragon’s Vault is
                on a mission to safe-guard humanity’s financial well-being.
                <br />
                <br />
                To learn more visit us at: &nbsp;
                <a href="http://www.dragonsvault.co/" target="_blank">
                  {" "}
                  http://www.dragonsvault.co/
                </a>
              </div>
            </div>
            <div className="contest__info--title text__left mobile">
              About Dragon’s Vault
            </div>
          </div>

          <div className="row contest__info--row">
            <div className="contest__info--content">
              <div className="contest__info--title text__left desktop">
                About Patrick Poirier
              </div>
              <div className="contest__info--text text__left">
                Throughout my life, I have chased a dream, always unsatisfied
                from not reaching it. In part because I faced my own
                long-lasting struggles when I was gravely scarred while still a
                toddler from an unfortunate barbecue accident.
                <br />
                <br />
                My outlook toward life and the future was motivated to overcome
                my life’s struggles. I believe a life of dissatisfaction is
                required in order to disrupt the status quo.
                <p>
                  <img className="float__left" src={patrick1} alt="patrick1" />
                  <span>
                    I wish to grant this award to a young person who has used
                    their own challenges as a catalyst, and building an extreme
                    determination to solve the impossible. I hope the recipient
                    will also lack an interest toward materialistic hoarding
                    lifestyle (no one really needs a Lamborghini), and plan to
                    use this trust fund toward accelerating progress for
                    humankind. If your dream is to use AI to make better tasting
                    coffee or to take better pictures of food, that may be
                    commercially viable, but it will have no chance to win this
                    award, as I am looking for technologies that will have a
                    massive impact for many different industries to solve real
                    problems.
                  </span>
                </p>
                <br />
                Understand that grades don't matter to me; I myself dropped out
                of high school before choosing to return and go on to earn five
                different degrees. What I believe matters most is commitment,
                passion and a motivation to put in the hard work. Therefore,
                this award will not consider grades, it isn’t rote memorization
                and regurgitation I’m looking for. Tell me what you are
                passionate about and how you want to devote your future toward
                reaching an insurmountable task without the financial constraint
                imposed by our capitalistic world.
                <br />
                <br />
                <p>
                  <img className="float__right" src={patrick2} alt="patrick2" />
                  <span>
                    I have always struggled to find jobs, taking on hundreds of
                    interviews and being forced to create new start up ventures
                    to sustain myself. This financial burden has prevented me
                    from pursuing my true passion for Deep Tech. I hope the
                    awardee will share similar interests. I don’t believe there
                    is anything preventing young people from understanding
                    complex topics provided they are interested and put forth
                    the necessary efforts.
                  </span>
                </p>
                <br />I attended a lecture by a 14-year-old who deftly explained
                advanced scientific papers on Brain-Computer Interfaces that
                left most of the adults in the room baffled. So, I know you are
                out there and I will be there to support you for the rest of
                your life by shielding you from commercial greed that may come
                to distort your vision.
              </div>
            </div>
            <div className="contest__info--title text__left mobile">
              About Patrick Poirier
            </div>
          </div>

          <div className="row contest__info--row">
            <div className="contest__info--content">
              <div className="contest__info--title text__left desktop">
                About Legacy Fund
              </div>
              <div className="contest__info--text text__left">
                The Legacy Fund was developed to provide investment and support
                to noteworthy individuals, teams or businesses with impactful
                technologies, inspired vision or business opportunities that
                align with Dragon’s Vault mission and objectives
              </div>
            </div>
            <div className="contest__info--title text__left mobile">
              About Legacy Fund
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContestPage;
