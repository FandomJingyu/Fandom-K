import { css } from "@emotion/react";

const mypage = css`
    display: flex;
    flex-direction: column;
    color: white;
    margin: 0px auto;
    max-width: 1310px;
  
`;

const myIdol = css`
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding: 30px 0px 40px 0px;
    max-width: 1200px;
  
    > h2 {
        font-size: 26px;
    }

    > div {
        background: pink;
        width: 50%;
    }
`;

const addIdol = css`
    display: flex;
    flex-direction: column;

    > h2 {
        font-size: 26px;
        margin-bottom: 32px;
    }
    

`;

const addIdolListWrapper = css`
    display: flex;
    align-items: center;
    gap: 34px;
    > button {
        width: 29px;
        height: 135px;
        border-radius: 4px;
        background: rgba(27, 27, 27, 0.8);
    }
`;

const addIdolList = css`
`;

const addButton = css`
    display: flex;
    justify-content: center;
    margin-top: 48px;
`;

export { mypage, myIdol, addIdol, addIdolListWrapper, addIdolList, addButton };
