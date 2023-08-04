import { links } from "../../Data";
import "./header.css";

import { FaTwitter } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { BsSun, BsMoon } from "react-icons/bs";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import ShapeOne from "../../assets/shape-1.png";

const getStorageTheme = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }

  return theme;
};

import { animateScroll } from "react-scroll";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);
  const [theme, setTheme] = useState(getStorageTheme());
  const scrollTop = () => {
    animateScroll.scrollToTop();
  };

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);
  useEffect(() => {
    document.body.classList.toggle("no-scroll", showMenu);
  }, [showMenu]);

  useEffect(() => {
    document.documentElement.classList = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <header className={`${scrollNav ? "header scroll-header" : "header"}`}>
      <nav className="nav">
        <Link to="/" onClick={scrollTop} className="nav__logo text-cs">
          Miller
        </Link>
        <div
          href=""
          className={`${showMenu ? "nav__menu show-menu" : "nav__menu"}`}>
          <div className="nav__data">
            <ul className="nav__list">
              {links.map(({ name, path }, index) => {
                return (
                  <li key={index} className="nav__item">
                    <Link
                      className="nav__link text-cs"
                      to={path}
                      spy={true}
                      hashSpy={true}
                      smooth={true}
                      offset={-150}
                      onClick={() => setShowMenu(!showMenu)}
                      duration={500}>
                      {name}{" "}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="header__socials">
              <a href="" className="header__socials-link">
                <FaTwitter />
              </a>
              <a href="" className="header__socials-link">
                <FaDribbble />
              </a>
              <a href="" className="header__socials-link">
                <FaBehance />
              </a>
            </div>
          </div>
          <div className="section__deco deco__left header__deco">
            <img src={ShapeOne} alt="" className="shape" />
          </div>
        </div>

        <div className="nav__btns">
          <div className="theme__toggler" onClick={toggleTheme}>
            {theme === "light-theme" ? <BsMoon /> : <BsSun />}
          </div>
          <div
            className={`${
              showMenu ? "nav__toggle animate__toggle" : "nav__toggle"
            }`}
            onClick={() => setShowMenu(!showMenu)}>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
