import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { Team, MediaSlider } from '../../components';

import './Home.scss';

import decor_1 from '../../assets/img/decor/1.svg';
import portfolioBtnImg from '../../assets/img/portfolio/btn.svg';
import arrowBottom from '../../assets/img/arrow-next.svg';
import portfolioArrowImg from '../../assets/img/portfolio/arrow.svg';

const scrollToRef = (ref) =>
	window.scrollTo({
		top: ref.current.offsetTop,
		behavior: 'smooth',
	});

const HomePage = () => {
	const portfolio = [
		{
			text: 'Human Capital',
			link: 'human',
		},
		{
			text: 'Collective Cash Flow',
			link: 'collective',
		},
		{
			text: 'Legacy Fund',
			link: 'legacy',
		},
		{
			text: 'Crypto Assets',
			link: 'crypto',
		},
	];

	const mainRef = useRef(null);
	const portfolioRef = useRef(null);
	const executeScroll = (reference) => scrollToRef(reference);

	return (
		<div className="home">
			<div className="home__main">
				<div className="row">
					<div className="title-top">Dragon’s Vault</div>
					<h1 className="h1">Safeguarding Humanity’s Financial Well-Being</h1>
					<img onClick={() => executeScroll(mainRef)} className="home__inf--arrow" src={arrowBottom} alt="" />
				</div>
			</div>

			<div className="home__inf" ref={mainRef}>
				<p>
					<span>Dragon’s Vault</span> is&nbsp;a&nbsp;globally distributed investment portfolio composed
					of&nbsp;crypto-assets and venture capital. Our family of&nbsp;funds are optimized for<br></br>{' '}
					high-risks/high-returns and shielded against localized financial crisis and currency devaluation
					of&nbsp;specific regions of&nbsp;the world.
				</p>
				<img src={decor_1} alt="" />
				<div>
					<img
						onClick={() => executeScroll(portfolioRef)}
						className="home__inf--arrow"
						src={arrowBottom}
						alt=""
					/>
				</div>
			</div>

			<section className="home__portfolio" ref={portfolioRef}>
				<div className="row home__portfolio-row">
					<h2 className="home__portfolio-title h2 h2--decor">Portfolio</h2>
					<div className="home__portfolio-box">
						{portfolio.map((card, index) => {
							return (
								<Link key={index} to={`/${card.link}`} className="home__portfolio-card">
									<div
										className={classNames('home__portfolio-card-box', {
											'home__portfolio-card-box--reverse': index % 2,
										})}
									>
										<img
											src={require(`../../assets/img/portfolio/${index + 1}.jpg`)}
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
			<section className="home__media">
				<div className="h2 home__media-title h2--decor">Media</div>
				<div className="home__media-video">
					<iframe
						frameBorder="0"
						allowFullScreen=""
						width="100%"
						height="100%"
						src="https://www.youtube.com/embed/sBR8GTUxznM"
					></iframe>
				</div>
			</section>
			<MediaSlider />
			<Team />
		</div>
	);
};

export default HomePage;
