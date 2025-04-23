import { css } from "@emotion/react";

// &.small을 통해 다른 사이즈 제공
const idolList = css`
    width: 128px;
    height: 183px;
    text-align : center;
    margin: 16px 0px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > h3 {
        font-size: 16px;
        font-weight: bold;
        margin-top: 8px;
    }

    > h4 {
        font-size: 14px;
        color: rgba(255, 255, 255, 0.6)
    }

    // myIdolList 에 들어가는 사이즈 -> 나중에 ustState 쓸때 사이즈 쓸 예정
    &.small {
        width: 100px;
        height: 153px;
    }
`;

export { idolList };
