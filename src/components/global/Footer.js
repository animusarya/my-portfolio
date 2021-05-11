import React from 'react';
import styled from 'styled-components';

import SubscribeForm from '../contact/SubscribeForm';

const Container = styled.footer`
  background-color: ${(props) => props.theme.darkShades};
  a {
    color: ${(props) => props.theme.textColorLite} !important;
    line-height: 1.5;
  }
  @media screen and (max-width: 768px) {
    .column {
      text-align: left !important;
    }
    h1 {
      margin-bottom: 1rem !important;
    }
  }
`;

const LogoImg = styled.img`
  max-height: 7rem;
  @media screen and (max-width: 768px) {
    margin-bottom: 1rem !important;
  }
`;

const aboutInfo = [
  { id: 1, name: 'Home', url: '/' },
  { id: 2, name: '  Who we are', url: '/about' },
  { id: 3, name: ' What we do', url: '/service' },
  {
    id: 4,
    name: 'How we help',
    url: '/help',
  },
  {
    id: 5,
    name: 'Who we work with',
    url: '/work',
  },
  {
    id: 6,
    name: 'Support',
    url: '/support',
  },
  {
    id: 7,
    name: 'News',
    url: '/blog',
  },
  {
    id: 8,
    name: 'Contact',
    url: '/contact',
  },
];

const Footer = () => {
  return (
    <Container>
      <div className="section">
        <div className="container">
          <div className="columns  is-variable is-7">
            <div className="column">
              <LogoImg
                src="/images/footer-logo.png"
                alt="footer-logo"
                className="mb-6"
              />
              <h1 className="has-text-white is-size-5 has-text-weight-medium mb-6 is-flex is-align-items-center">
                Follow Us
                <a
                  href="https://www.linkedin.com/company/epic-restart-foundation/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-linkedin is-size-1 ml-3" />
                </a>
              </h1>
              <SubscribeForm />
              <p className="subtitle">
                © EPIC Restart Foundation 2021. All Rights Reserved
              </p>
            </div>
            <div className="column">
              <ul>
                {aboutInfo.map((item) => (
                  <li key={item.id}>
                    <a
                      className="is-size-4 has-text-weight-normal"
                      href={item.url}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-6 text">
                <div>
                  <a href="/terms-conditions" className="subtitle mb-5">
                    Terms and Conditions •
                  </a>
                  <a href="/privacy-policy" className="subtitle mb-5">
                    {' '}
                    Privacy Policy •
                  </a>
                  <a href="/safeguarding-statement" className="subtitle mb-5">
                    {' '}
                    Safeguarding Statement
                  </a>
                </div>
                <p className="subtitle mt-5">
                  EPIC Restart Foundation is a registered charity no 1192907.
                  Registered Office: Suite 2, Northern Diver Building, Appley
                  Bridge, WN6 9AE. Tel. No. 01942 494913
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default Footer;
