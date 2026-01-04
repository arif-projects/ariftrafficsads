// src/styles/GlobalStyles.js
import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyles = createGlobalStyle`
  :root {
    --bg: ${theme.colors.bg};
    --card-bg: ${theme.colors.cardBg};
    --headline: ${theme.colors.headline};
    --text: ${theme.colors.text};
    --label: ${theme.colors.label};
    --accent: ${theme.colors.accent};
    --btn: ${theme.colors.primaryBtn};
    --btnHover: ${theme.colors.btnHover};
    --border: ${theme.colors.border};
    --glow: ${theme.colors.glow};
    --shadow: ${theme.colors.shadow};
  }

  * { box-sizing: border-box; }
  html, body, #root {
    height: 100%;
    margin: 0;
    background: var(--bg);
    color: var(--text);
    font-family: ${theme.fonts.body};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1,h2,h3 {
    font-family: ${theme.fonts.heading};
    color: var(--headline);
    line-height: 1.2;
  }

  a { color: var(--headline); text-decoration: none; }

  /* Button base */
  .neon-btn {
    font-family: ${theme.fonts.heading};
    font-weight: 500;
    font-size: 0.95rem;
    padding: 0.6rem 1rem;
    border-radius: 10px;
    background: var(--btn);
    color: #fff;
    border: none;
    box-shadow: 0 6px 18px var(--shadow);
    transition: box-shadow .2s ease, transform .12s ease;
  }
  .neon-btn:hover {
    background: var(--btnHover);
    box-shadow: 0 10px 30px var(--glow);
    transform: translateY(-2px);
  }

  /* utility */
  .glass {
    background: rgba(255,255,255,0.03);
    border: 1px solid var(--border);
    backdrop-filter: blur(6px);
    border-radius: 12px;
  }
`;

export default GlobalStyles;
