import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset-advanced';

const mainBrandColor = '#00B5B1';
const lightShades = '#F9A620';
const darkAccent = '#E5E5E5';
const darkShades = '#445368';

export const theme = {
  // It can be liberally applied to your layout as its main identity.
  mainBrandColor,
  // Accent colors can be used to bring attention to design elements
  // by contrasting with the rest of the palette.
  lightAccent: '#7A2540',
  // Use this color as the background for your dark-on-light designs,
  // or the text color of an inverted design.
  lightShades,
  // Another accent color to consider. Not all colors have to be used -
  // sometimes a simple color scheme works best.
  darkAccent,
  // Use as the text color for dark-on-light designs,
  // or as the background for inverted designs.
  darkShades,
  dangerColor: '#f44336',

  primaryColor: '#18191F',
  borderColor: '#BDBDBD',
  backgroundColor: ' #4F4F4F;',
  backgroundInputColor: '#F9F9F9',
  backgroundInputColorDark: '#EDC4D1',
  hoverTextColor: '#e6e6e6',
  fontSize: '16px', // is-size-6
  fontSizeMedium: '18px',
  fontSizeExtraMedium: '24px',
  fontSizeLarge: '32px', // is-size-3
  fontSizeExtraLarge: '40px',
  lineHeightNormal: '24px',
  lineHeightMedium: '40px',
  lineHeight: '30px',
  lineHeightLarge: '35px',
  lineHeightExtraLarge: '55px',
  textColor: '#445368',
  textColorInverse: '#343341',
  backgroundWhite: '#FFFFFF',
  textColorLite: '#F3FAFE',
  textColorDark: '#252B42',
  placeholderColor: '#445368',
  menuTintColor: darkAccent,
  primaryFontFamily: "'Roboto', sans-serif",
  secondaryFontFamily: "'Roboto', sans-serif",
  boxShadow: 'rgba(0,0,0,0.08) 0px 7px 18px',
};

const GlobalStyle = createGlobalStyle`
  ${reset};

  body {
    font-family: ${theme.primaryFontFamily};
    color: ${theme.textColor};
    letter-spacing: 0.7px !important;
    font-size:${theme.fontSize};
    .columns {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
  }

  h1, h2, button {
    font-family: ${theme.secondaryFontFamily};
    color:${theme.textColorLite};
  }
  p {
    color:${theme.textColorLite};
    line-height: 1.5rem;
    font-family: ${theme.primaryFontFamily};
    font-style: normal;
    font-weight: normal;
  }

  .title, .box {
    color: ${theme.textColorLite} !important;
    font-size:${theme.fontSize};
    line-height:1.5 !important;
    font-family: ${theme.primaryFontFamily};
  }

  .subtitle {
    font-family: ${theme.primaryFontFamily};
    color: ${theme.textColorLite} !important;
    line-height: 1.5;
    font-size:${theme.fontSize};

  }
  .has-text-primary{
    color:${theme.mainBrandColor} !important;
  }
  .button, .input, .card {
    box-shadow: ${theme.boxShadow};
  }

  .has-text-warning {
    color: ${theme.lightAccent} !important;
  }

  .help.is-danger {
    color:${theme.dangerColor} !important;
  }

  .is-family-primary {
    font-family: ${theme.primaryFontFamily} !important;

  }

  .line-height-medium{
    line-height:30px !important;
  }

  .line-height-large {
    line-height: 70px !important;
    @media screen and (max-width: 768px) {
      line-height:40px !important;
    }
  }

  .has-radius-medium{
  border-radius:20px
  }

  .markdown-container {
    h1 {
      font-size: 40px;
      margin-top: 1.2rem;
      margin-bottom: 1.5rem;
      color: ${theme.darkShades} !important;
      line-height: 48px;
    }
    strong {
      color: ${theme.darkShades} !important;
      font-weight:600 !important;
    }
      h4, h5, h6 {
      margin-top: 1.5rem;
      margin-bottom: 1.5rem;
      font-size: 1.5rem;
      color: ${theme.darkShades};
      font-family: ${theme.primaryFontFamily} !important;
    }
    h2 {
      font-size: 24px;
      margin-top: 1.3rem;
      margin-bottom: 1.3rem;
      color: ${theme.darkShades};
      font-family: ${theme.primaryFontFamily};
    }
    h3 {
      margin-top: 1.3rem;
      margin-bottom: 1.3rem;
      color: ${theme.darkShades};
      font-family: ${theme.primaryFontFamily};
    }
    p {
      font-size: ${theme.fontSizeMedium};
      color: ${theme.darkShades} !important;
      line-height:1.8rem;
    }
    a, code {
      font-size: ${theme.fontSizeMedium};
      color: ${theme.darkShades} !important;
      text-decoration: underline;
    }
    ol, ul {
      list-style: disc !important;
    }
  }
`;

export default GlobalStyle;
