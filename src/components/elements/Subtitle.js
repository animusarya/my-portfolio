import React from 'react';
import styled from 'styled-components';

const Text = styled.p`
  color: ${(props) =>
    props.secondary
      ? props.theme.darkShades
      : props.theme.textColorLite} !important;
  line-height: ${(props) => props.theme.lineHeight} !important;
  font-size: ${(props) => props.theme.fontSizeMedium} !important;
`;

const Subtitle = ({ children, isCentered, className, ...props }) => (
  <div>
    <Text
      className={`is-size-5-mobile has-text-weight-normal ${className} ${
        isCentered ? 'has-text-centered' : 'has-text-left'
      } `}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </Text>
  </div>
);

export default Subtitle;
