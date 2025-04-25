import { Global, css } from "@emotion/react";

const resetStyles = css`
  :root {
    --orange-F96D69: #f96d69;
    --pink-FE5493: #fe5493;
    --black-02000E: #02000e;
    --black-181D26: #181d26;
    --gray-67666E: #67666e;
    --gray-828282: #828282;
    --gray-8C92AB: #8c92ab;
    --gray-A3A5A8: #a3a5a8;
    --white-F7F7F8: #f7f7f8;
  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  font,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  p,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    background: transparent;
    box-sizing: border-box;
    word-break: keep-all;
  }

  html {
    overflow-y: scroll;
    -webkit-text-size-adjust: 100%;
  }

  html,
  body {
    width: 100%;
    font-size: 14px;
    line-height: 1.4em;
    margin: 0 auto;
    background-color: var(--black-02000E);
  }

  body {
    font-size: 1rem;
    font-family: 'Pretendard', sans-serif;
    color: var(--black-02000E);
  }

  figure {
    display: block;
    margin: 0;
    padding: 0;
  }

  select,
  input,
  textarea,
  button {
    font-size: 1em;
    font-family: 'Pretendard', sans-serif;
    vertical-align: middle;
    color: var(--white-F7F7F8);
    background: transparent;
    box-sizing: border-box;
    border: none;
  }

  button,
  a {
    cursor: pointer;
    padding: 0;
  }

  a {
    color: var(--white-F7F7F8);
    text-decoration: none;
  }

  input[type='text'],
  input[type='password'] {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  textarea {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    -webkit-overflow-scrolling: touch;
    -moz-overflow-scrolling: touch;
    -o-overflow-scrolling: touch;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 100%;
    font-weight: normal;
  }

  input {
    padding: 0;
    margin: 0;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
    vertical-align: top;
  }

  th {
    font-size: 1em;
  }

  img,
  fieldset {
    border: 0;
  }

  img {
    display: block;
  }

  ol,
  ul {
    list-style: none;
  }

  hr {
    border: 0;
    height: 1px;
    background: #ddd;
  }

  label {
    cursor: pointer;
  }

  legend,
  caption {
    width: 0;
    height: 0;
    overflow: hidden;
    visibility: hidden;
    font-size: 0;
    line-height: 0;
  }

  em {
    font-style: normal;
  }

  ins {
    text-decoration: none;
  }
`;

export default function ResetStyles() {
	return <Global styles={resetStyles} />;
}
