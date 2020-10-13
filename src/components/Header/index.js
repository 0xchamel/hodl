import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import './Header.scss'

import logoImg from '../../assets/img/logo.svg';

const Header = () => {
    const [isHeaderActive, setHeaderActive] = React.useState(false)

    React.useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                setHeaderActive(true)
            } else {
                setHeaderActive(false)
            }
        })
    })

    return (
        <header className={classNames('header', {
            'active': isHeaderActive
        })}>
            <div className="row header__row">
                <img src={logoImg} alt="" className="logo" />
                <div className="header__links">
                    <Link to="/" className="header__link">Portfolio</Link>
                    <Link to="/" className="header__link">Media</Link>
                    <Link to="/" className="header__link">Team</Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
