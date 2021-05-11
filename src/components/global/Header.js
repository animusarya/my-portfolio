import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { Button } from '../elements';

const Section = styled.section`
  .navbar {
    padding: 0.8rem 1.5rem;
  }
  .navbar-item {
    font-size: ${(props) => props.theme.fontSizeMedium};
    color: ${(props) => props.theme.textColor};
    line-height: ${(props) => props.theme.lineHeightNormal};
    :focus {
      background-color: transparent !important;
    }
  }
  a.navbar-item:hover {
    color: ${(props) => props.theme.textColor};
    background-color: transparent !important;
  }
  .navbar-item img {
    max-height: 5.5rem !important;
  }
  .navbar-start {
    margin-right: 0;
    justify-content: center !important;
    flex: 1;
  }
  .navbar-end {
    margin-left: 0;
  }
  .navbar-burger {
    background: ${(props) => props.theme.mainBrandColor};
    border-radius: 4px;
  }
  @media screen and (max-width: 768px) {
    .navbar {
      padding: 0rem;
    }
    .navbar-menu {
      /* background: ${(props) => props.theme.mainBrandColor} !important; */
    }
    .navbar-item {
      color: ${(props) => props.theme.textColor} !important;
    }
  }
`;

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <Section>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img src="/images/logo.png" alt="site logo" />
          </Link>
          <button
            type="button"
            className={
              isActive
                ? 'is-active navbar-burger  mt-4 mr-3 has-text-white'
                : 'navbar-burger mt-4 mr-3 has-text-white'
            }
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={() => setIsActive(!isActive)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
        <div className={isActive ? 'navbar-menu is-active' : 'navbar-menu '}>
          <div className="navbar-start">
            {' '}
            <Link
              to="/about"
              className="navbar-item has-text-weight-medium px-5"
            >
              Who we are
            </Link>
            <Link
              to="/service"
              className="navbar-item has-text-weight-medium px-5"
            >
              What we do
            </Link>
            <Link
              to="/help"
              className="navbar-item has-text-weight-medium px-5"
            >
              How we help
            </Link>
            <Link
              to="/work"
              className="navbar-item has-text-weight-medium px-5"
            >
              Who we work with
            </Link>
            <Link
              to="/support"
              className="navbar-item has-text-weight-medium px-5"
            >
              Support
            </Link>
            <Link
              to="/blog"
              className="navbar-item has-text-weight-medium px-5"
            >
              News
            </Link>
          </div>
          <div className="navbar-end">
            <div className="navbar-item has-text-weight-medium px-5">
              <Button to="/contact" type="button">
                Contact
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </Section>
  );
};

export default Header;
