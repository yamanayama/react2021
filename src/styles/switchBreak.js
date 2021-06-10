import { css } from '@emotion/react'
import { breakPoint } from "./constans";

const switchBreak = mode => {
  switch (mode) {
    case "sp":
      return css`
        @media (min-width: ${breakPoint}) {
          display: none;
        }
      `;
    case "pc":
      return css`
        display: none;
        @media (min-width: ${breakPoint}) {
          display: block;
        }
      `;
    case "both":
      return css`
        display: block;
      `;
    default:
      return css`
        display: block;
      `;
  }
};

export default switchBreak