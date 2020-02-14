
import { createGlobalStyle } from 'styled-components';

const bekkFontEOT = require('./fonts/32ABFA_0_0.eot');
const bekkFontEmbeddedOpentype = require('./fonts/32ABFA_0_0.eot?#iefix');
const bekkFontWOFF2 = require('./fonts/32ABFA_0_0.woff2');
const bekkFontWOFF = require('./fonts/32ABFA_0_0.woff');
const bekkFontTTF = require('./fonts/32ABFA_0_0.ttf');

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'FFDINWebProLight';
    src: url(${bekkFontEOT});
    src: url(${bekkFontEmbeddedOpentype}) format('embedded-opentype'),
      url(${bekkFontWOFF2}) format('woff2'),
      url(${bekkFontWOFF}) format('font-woff'),
      url(${bekkFontTTF}) format('truetype');
  }

  * {
      box-sizing: border-box;
  }

  html, body, #root {
      height: 100%;
  }

  body {
      background-color: black;
  }

  /* @font-face {
    font-family: 'NewZaldBook';
    src: url('./fonts/NewzaldWeb-Book.eot');
    src: url('./fonts/NewzaldWeb-Book.eot?#iefix') format('embedded-opentype'),
      url('./fonts/NewzaldWeb-Book.woff2') format('woff2'),
      url('./fonts/NewzaldWeb-Book.woff') format('font-woff');
  }

  @font-face {
    font-family: 'DINW01LightItalic';
    src: url('./fonts/5590883/e0df2bb1-32d4-4f28-a889-9e712e9e5032.eot?#iefix');
    src: url('./fonts/5590883/e0df2bb1-32d4-4f28-a889-9e712e9e5032.eot?#iefix')
        format('eot'),
      url('./fonts/5590883/8eb3ea4e-7431-45c4-a6c2-bb2e29a35912.woff2') format('woff2'),
      url('./fonts/5590883/947e980c-a314-46ff-9686-a2ac4fc5ef87.woff') format('font-woff'),
      url('./fonts/5590883/514ab38e-17f7-4b83-8cfe-78eac11c1de3.ttf') format('truetype');
  }
  @font-face {
    font-family: 'DINW01Regular';
    src: url('./fonts/5591097/9b63158c-0e74-4751-966c-d749c5d31cce.eot?#iefix');
    src: url('./fonts/5591097/9b63158c-0e74-4751-966c-d749c5d31cce.eot?#iefix')
        format('eot'),
      url('./fonts/5591097/6ceed230-b2b3-4422-b048-4aa11687430a.woff2') format('woff2'),
      url('./fonts/5591097/80b0143f-6f0d-4dce-aafd-f3c81b85d177.woff') format('font-woff'),
      url('./fonts/5591097/247437df-66d2-4605-ac03-1be0e07c31a7.ttf') format('truetype');
  }
  @font-face {
    font-family: 'DINW01Medium';
    src: url('./fonts/5591111/90744ee6-df8b-4daf-924d-e84a33fa139c.eot?#iefix');
    src: url('./fonts/5591111/90744ee6-df8b-4daf-924d-e84a33fa139c.eot?#iefix')
        format('eot'),
      url('./fonts/5591111/398e3e8c-3bf0-4af1-9791-f426a7992711.woff2') format('woff2'),
      url('./fonts/5591111/4ba8e512-e6fb-494f-afd3-a7b68b2e5efb.woff') format('font-woff'),
      url('./fonts/5591111/d988fb64-309d-4c7f-9ded-4e9663aa6061.ttf') format('truetype');
  } */
`

export default GlobalStyle;