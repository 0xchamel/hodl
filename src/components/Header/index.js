import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Drawer } from 'antd';

import './Header.scss';

import logoImg from '../../assets/img/logo.svg';
import humburger from '../../assets/img/humburger.svg';

const Header = () => {
	const [isHeaderActive, setHeaderActive] = React.useState(false);
	const [isMenuOpen, setMenuState] = React.useState(false);

	React.useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 50) {
				setHeaderActive(true);
			} else {
				setHeaderActive(false);
			}
		});
	});

	const toggleMenu = () => {
		setMenuState(!isMenuOpen);
	};

	return (
		<>
			<header
				className={classNames('header', {
					active: isHeaderActive,
				})}
			>
				<div className="row header__row">
					<img src={logoImg} alt="" className="logo" />
					<button className="header__hamburger" onClick={() => toggleMenu()}>
						<img src={humburger} alt="" />
					</button>
					<div className="header__links">
						<Link to="/" className="header__link">
							Portfolio
						</Link>
						<Link to="/" className="header__link">
							Media
						</Link>
						<Link to="/" className="header__link">
							Team
						</Link>
					</div>
				</div>
			</header>
			<Drawer
				drawerStyle={{ background: 'linear-gradient(180deg, rgba(73, 100, 125, 0.85) 0%, rgba(73, 100, 125, 0) 100%)' }}
				width={'100vw'}
				closable={true}
				onClose={() => toggleMenu()}
				visible={isMenuOpen}
			>

                <div>
                    <div className="drawer__links">
						<Link to="/" className="drawer__link">
							Portfolio
						</Link>
						<Link to="/" className="drawer__link">
							Media
						</Link>
						<Link to="/" className="drawer__link">
							Team
						</Link>
					</div>
                    <img src={logoImg}></img>
                </div>
            </Drawer>
		</>
	);
};

export default Header;
