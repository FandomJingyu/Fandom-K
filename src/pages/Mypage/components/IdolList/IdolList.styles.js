import { css } from "@emotion/react";

// &.small을 통해 다른 사이즈 제공
const idolList = css`
    text-align : center;
    display: flex;
    flex-direction: column;

    > h3 {
        font-size: 16px;
        font-weight: bold;
        margin-top: 8px;
    }

    > h4 {
        font-size: 14px;
        color: rgba(255, 255, 255, 0.6)
    }
`;

export { idolList };
