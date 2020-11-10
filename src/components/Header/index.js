import React from "react";
import classNames from "classnames";
import { Drawer } from "antd";
import { Link } from "react-router-dom";

import "./Header.scss";

import logoImg from "../../assets/img/logo.svg";
import humburger from "../../assets/img/humburger.svg";
import drawerBackground from "../../assets/img/drawer.svg";

import { ERefs } from "../../pages/Home/refs.enum";

const Header = () => {
  const [isHeaderActive, setHeaderActive] = React.useState(false);
  const [isMenuOpen, setMenuState] = React.useState(false);
  const [activeMenu, setCurrentMenu] = React.useState(ERefs.Home);

  const initObserver = (el, type) => {
    try {
      const intersectionObserverOptions = {
        root: null,
        threshold: 0.5,
      };

      const observer = new IntersectionObserver(
        onIntersection,
        intersectionObserverOptions
      );

      function onIntersection(entries, opts) {
        entries.forEach((entry) => {
          const visible = entry.intersectionRatio >= opts.thresholds[0];
          if (visible) {
            setCurrentMenu(type);
          }
        });
      }

      observer.observe(el);
    } catch {}
  };

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setHeaderActive(true);
      } else {
        setHeaderActive(false);
      }
    });

    const media = document.getElementById(ERefs.Media);
    const profile = document.getElementById(ERefs.Profile);
    const team = document.getElementById(ERefs.Team);

    initObserver(media, ERefs.Media);
    initObserver(profile, ERefs.Profile);
    initObserver(team, ERefs.Team);
  });

  const toggleMenu = () => {
    setMenuState(!isMenuOpen);
  };

  const goTo = (menu) => {
    toggleMenu();
    setCurrentMenu(menu);
  };

  return (
    <>
      <header
        className={classNames("header", {
          active: isHeaderActive,
        })}
      >
        <div className="row header__row">
          <a href="/">
            <img src={logoImg} alt="" className="logo" />
          </a>
          <button className="header__hamburger" onClick={() => toggleMenu()}>
            <img src={humburger} alt="" />
          </button>
          <div className="header__links">
            <a href="/#portfolio" className="header__link">
              Portfolio
            </a>
            {/* <a href="/#performance" className="header__link">
              Performance
            </a> */}
            <a href="/#team" className="header__link">
              Team
            </a>
            <a href="/#media" className="header__link">
              Media
            </a>
          </div>
        </div>
      </header>

      <Drawer
        drawerStyle={{ background: `url(${drawerBackground})` }}
        width={"100vw"}
        closable={true}
        onClose={() => toggleMenu()}
        visible={isMenuOpen}
      >
        <div className="drawer__container">
          <div className="drawer__links">
            <Link
              onClick={() => toggleMenu()}
              to="/"
              className={classNames("drawer__link", {
                active: activeMenu === ERefs.Home,
              })}
            >
              Main
            </Link>
            <a
              href="/#portfolio"
              onClick={() => goTo(ERefs.Profile)}
              className={classNames("drawer__link", {
                active: activeMenu === ERefs.Profile,
              })}
            >
              Portfolio
            </a>
            <a
              href="/#media"
              onClick={() => goTo(ERefs.Media)}
              className={classNames("drawer__link", {
                active: activeMenu === ERefs.Media,
              })}
            >
              Media
            </a>
            <a
              href="/#team"
              onClick={() => goTo(ERefs.Team)}
              className={classNames("drawer__link", {
                active: activeMenu === ERefs.Team,
              })}
            >
              Team
            </a>
          </div>

          <div className="drawer__footer">
            <img alt="Logo" className="drawer__logo" src={logoImg}></img>
            <div className="drawer__copyright">
              © 2020 · All rights reserved
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Header;
