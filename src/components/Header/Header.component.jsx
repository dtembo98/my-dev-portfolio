import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header_area">
      <div className="main_menu">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            {/* Brand and toggle get grouped for better mobile display */}
            {/* <a className="navbar-brand logo_h" href="index.html">
              <img src="img/logo.png" alt="" />
            </a> */}
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            {/* Collect the nav links, forms, and other content for toggling */}
            <div
              className="collapse navbar-collapse offset"
              id="navbarSupportedContent"
            >
              <ul className="nav navbar-nav menu_nav justify-content-end">
                <li className="nav-item active">
                  <Link to="/" className="nav-link">
                    {' '}
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="aboutus">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="services" className="nav-link">
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="portfolio">
                    Portfolio
                  </Link>
                </li>
                <li className="nav-item submenu dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Pages
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link className="nav-link" to="elements">
                        Elements
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="portfolio-details">
                        Portfolio Details
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="blog">
                    Blog
                  </Link>
                </li>
                {/* <li className="nav-item">
                      <Link className="nav-link" to="blog-details">
                        Blog Details
                      </Link>
                    </li> */}

                <li className="nav-item">
                  <Link className="nav-link" to="contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
