import React from 'react';

import './Footer.scss'

import logoImg from '../../assets/img/logo.svg';
import pdf from '../../assets/doc/privacy.pdf';

const Footer = () => {

    const socials = [
        {
            img: 'fb',
            link: '/'
        },
        {
            img: 'tw',
            link: '/'
        },
        {
            img: 'inst',
            link: '/'
        },
        {
            img: 'in',
            link: '/'
        },
        {
            img: 'youtube',
            link: '/'
        },
    ]

    return (
        <footer className="footer">
            <div className="row footer__row">
                <div className="footer__box footer__box-top">
                    <span className="desktop">© 2020 · All rights reserved</span>
                    <img className="footer__box-logo" src={logoImg} alt="" />
                    <a className="desktop" href={pdf} target="blank">Privacy Policy</a>
                </div>
                
                <div className="footer__box footer__box-bottom">
                    {
                        socials.map((item, index) => {
                            return <a key={index} href={item.link}>
                                <img src={require(`../../assets/img/socials/${item.img}.svg`)} alt="" />
                            </a>
                        })
                    }
                </div>

                <div className="footer__box footer__box-mobile">
                    <a className="mobile" href={pdf} target="blank">Privacy Policy</a>
                    <span className="mobile">© 2020 · All rights reserved</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
