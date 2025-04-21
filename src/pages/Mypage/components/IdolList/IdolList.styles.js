import { css } from "@emotion/react";

// &.small을 통해 다른 사이즈 제공
const idolList = css`
    width: 128px;
    height: 183px;
    text-align : center;

    > h3 {
        font-size: 16px;
        font-weight: bold;
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

const idolFace = css`
    width: 100%;
    aspect-ratio: 1 / 1; // 가로:세로 비율 1:1 (정사각형)
    border-radius: 50%;
    margin-bottom: 8px;

    > img {
        width: 100%;
        aspect-ratio: 1 / 1; // 가로:세로 비율 1:1 (정사각형)
        border-radius: 50%;
        object-fit: cover;
    }
`;

export { idolList, idolFace };
