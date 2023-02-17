import React, { useState } from "react";
import "./Nav.scss";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import NotificationsIcon from "@mui/icons-material/Notifications";

function Nav() {
  const [navBlack, setNavBlack] = useState(false);
  const [toogleMenu, setToogleMenu] = useState(false);

  const transitionNav = () => {
    // Lorsqu'on scroll verticalement
    window.scrollY > 100 ? setNavBlack(true) : setNavBlack(false);
  };

  //lorsqu'on scroll on appel la fonction
  useState(() => {
    // eslint-disable-next-line no-unused-expressions
    document.addEventListener[("scroll", transitionNav)];
  });

  const handleClick = () => {
    toogleMenu ? setToogleMenu(false) : setToogleMenu(true);
  };

  return (
    <div
      className={`nav ${
        navBlack || toogleMenu ? "nav--black" : "nav--transparent"
      } ${toogleMenu && "show"}`}
    >
      <button className="nav__burger" onClick={handleClick}>
        <MenuIcon />
      </button>
      <img src="./images/logo.png" className="nav__logo" alt="Netflix" />
      <nav className="nav__links">
        <a href="/" className="nav__link">
          Accueil
        </a>
        <a href="/" className="nav__link">
          Séries
        </a>
        <a href="/" className="nav__link">
          Films
        </a>
      </nav>
      <div className="nav__actions">
        <a href="/" className="nav__action">
          <SearchIcon />
        </a>
        <a href="/" className="nav__action">
          DIRECT
        </a>
        <a href="/" className="nav__action">
          <CardGiftcardIcon />
        </a>
        <a href="/" className="nav__action">
          <NotificationsIcon />
        </a>
        <a href="/" className="nav__action">
          <img src="./images/avatar.jpg" alt=""></img>
        </a>
      </div>
    </div>
  );
}

export default Nav;
