import { Global, css } from "@emotion/react";

export const layoutStyles = css`
  .mainGrid {
    width: 1200px;
    position: relative;
    margin-inline: auto;
  }
  
  .landingGrid {
    width: 1800px;
    position: relative;
    margin-inline: auto;
  }

  @media all and (max-width: 1900px) {
    .landingGrid {
      width: auto;
      max-width: none;
      margin-inline: 24px;
    }
  }

  @media all and (max-width: 1300px) {
    .mainGrid,
    .landingGrid {
      width: auto;
      max-width: none;
      margin-inline: 24px;
    }
  }

  @media all and (max-width: 768px) {
    .mainGrid,
    .landingGrid {
      width: auto;
      max-width: none;
      margin-inline: 3.23vw;
    }
  }

  @media all and (max-width: 425px) {
    .mainGrid,
    .landingGrid {
      width: auto;
      max-width: none;
      margin-inline: 6.42vw;
    }
  }
`;

export default function LayoutStyles() {
	return <Global styles={layoutStyles} />;
}
