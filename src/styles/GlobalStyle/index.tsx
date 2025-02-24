import { css, Global } from '@emotion/react';

export function GlobalStyle() {
  return <Global styles={globalStyle} />;
}

const globalStyle = css`
  body {
    --bg-color: #ffffff;
    --text-color: #333333;
    --text-white-color: #ffffff;
    --brand-color: #94bbff;
    --footer-bg-color: #555555;
    --footer-text-color: #cccccc;
    --layout-padding: 8px 6px;
    --default-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
      0 1px 2px rgba(0, 0, 0, 0.24);
    color: var(--text-color);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
  }

  button,
  a {
    all: unset;
    cursor: pointer;
  }
`;
