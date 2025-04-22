import { Global, css } from "@emotion/react";

const commonStyles = css`
  .hide-default {
    display: none !important;
  }
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
   @media all and (max-width: 744px) {
    .hide-744 {
      display: none !important;
    }
    .show-744 {
      display: block !important;
    }
  }

  @media all and (max-width: 375px) {
    .hide-375 {
      display: none !important;
    }
    .show-375 {
      display: block !important;
    }
  }
`;

export default function CommonStyles() {
	return <Global styles={commonStyles} />;
}
