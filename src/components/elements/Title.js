import React from 'react';
import styled from 'styled-components';

const Text = styled.h1`
  color: ${(props) =>
    props.color ? props.color : props.theme.textColorLite} !important;
  font-size: ${(props) =>
    props.isSmall
      ? props.theme.fontSizeExtraMedium
      : props.theme.fontSizeLarge} !important;
  line-height: ${(props) =>
    props.isSmall
      ? props.theme.lineHeight
      : props.theme.lineHeightMedium} !important;
`;

const Title = ({ children, centered, className, color, isSmall }) => (
  <div>
    <Text
      className={`is-size-5-mobile has-text-weight-semibold ${className} ${
        centered ? 'has-text-centered' : ''
      }`}
      color={color}
      isSmall={isSmall}
    >
      {children}
    </Text>
  </div>
);

export default Title;
