import React from 'react';
import styled from 'styled-components';

const Icon = styled.i`
  color: ${(props) => props.theme.backgroundWhite} !important;
  font-size: 2rem;
  h1 {
    font-size: 2rem;
  }
`;

const socialNetworks = ({ twitter, facebook, gmail, whatsapp, linkdin }) => {
  const items = [];
  if (gmail) {
    items.push({
      id: 1,
      icon: 'fas fa-envelope',
      link: 'https://www.instagram.com/',
    });
  }
  if (whatsapp) {
    items.push({
      id: 3,
      icon: 'fab fa-whatsapp',
      link: 'https://www.instagram.com/',
    });
    if (facebook) {
      items.push({
        id: 2,
        icon: 'fab fa-facebook-f',
        link: 'https://www.facebook.com/',
      });
    }
  }
  if (twitter) {
    items.push({
      id: 5,
      icon: 'fab fa-twitter',
      link: 'https://www.instagram.com/',
    });
  }
  if (linkdin) {
    items.push({
      id: 4,
      icon: 'fab fa-linkedin-in',
      link: 'https://in.linkedin.com/',
    });
  }
  return items;
};

const SocialIcons = () => (
  <div className="is-flex is-justify-content-space-between">
    <h1 className="is-size-3 has-text-weight-medium">Share</h1>
    {socialNetworks({
      gmail: 'https://www.instagram.com/',
      facebook: 'https://www.instagram.com/',
      whatsapp: 'https://www.instagram.com/',
      twitter: 'https://www.instagram.com/',
      linkdin: 'https://www.linkedin.com/company/epic-restart-foundation/',
    }).map((item) => (
      <div key={item.id}>
        <a href={item.link} target="_blank" rel="noreferrer">
          <Icon className={item.icon} />
        </a>
      </div>
    ))}
  </div>
);

export default SocialIcons;
