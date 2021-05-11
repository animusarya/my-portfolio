import React from 'react';
import styled from 'styled-components';

const Text = styled.h1`
  line-height: ${(props) => props.theme.lineHeightMedium};
  color: ${(props) =>
    props.secondary ? props.theme.mainBrandColor : props.theme.darkShades};
  font-size: ${(props) =>
    props.isMedium
      ? props.theme.fontSizeExtraMedium
      : props.theme.fontSizeExtraLarge};
`;

const Heading = ({ children, centered, secondary, className, isMedium }) => {
  return (
    <>
      <Text
        className={`has-text-weight-semibold is-size-4-mobile ${className} ${
          centered ? 'has-text-centered' : ''
        } `}
        secondary={secondary}
        isMedium={isMedium}
      >
        {children}
      </Text>
    </>
  );
};
export default Heading;
