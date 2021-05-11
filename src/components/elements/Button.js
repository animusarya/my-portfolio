import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const LinkWrapper = styled(Link)`
  .button:focus:not(:active) {
    box-shadow: none;
    color: ${(props) => props.theme.backgroundWhite} !important;
  }
  button {
    background-color: ${(props) =>
      props.secondary
        ? props.theme.mainBrandColor
        : props.theme.lightShades} !important;
    cursor: pointer;
    border-right: 8px;
    border-color: ${(props) =>
      props.secondary
        ? props.theme.mainBrandColor
        : props.theme.lightShades} !important;
    line-height: ${(props) => props.theme.lineHeightNormal};
    padding-left: ${(props) => (props.large ? '6rem' : '3rem')};
    padding-right: ${(props) => (props.large ? '6rem' : '3rem')};
  }
  .button.is-hovered,
  .button:hover,
  .button:active {
    background-color: ${(props) =>
      props.secondary
        ? props.theme.mainBrandColor
        : props.theme.lightShades} !important;
    border-color: ${(props) =>
      props.secondary
        ? props.theme.mainBrandColor
        : props.theme.lightShades} !important;
  }
`;

const Button = ({ children, to, secondary, className, large }) => {
  return (
    <LinkWrapper to={to} secondary={secondary} large={large}>
      <button
        type="submit"
        className={`button is-medium has-text-white has-text-weight-medium ${className} `}
      >
        {children}
      </button>
    </LinkWrapper>
  );
};
export default Button;
