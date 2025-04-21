import { css } from "@emotion/react";

//마이페이지 전체 ui 틀
const mypage = css`
    display: flex;
    flex-direction: column;
    color: white;
    margin: 0px auto;
    max-width: 1200px;
  
`;

//나의 아이돌
const myIdol = css`
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding: 30px 0px 40px 0px;
    margin-bottom: 40px;
  
    > h2 {
        font-size: 26px;
        margin-bottom: 32px;
    }
`;

// 나의 아이돌 리스트
const myIdolList = css`
    display: flex;
    gap: 24px;
`;

// 아이돌 추가하기
const addIdol = css`
    display: flex;
    flex-direction: column;
    width: 100%;

    > h2 {
        font-size: 26px;
        margin-bottom: 32px;
    }
`;

// 추가하기 버튼
const addButton = css`
    display: flex;
    justify-content: center;
    margin-top: 48px;
`;

export { mypage, myIdol, myIdolList, addIdol, addButton };
