import { css } from "@emotion/react";

const mypage = css`
    display: flex;
    flex-direction: column;
    color: white;
    margin: 0px auto;
    max-width: 1200px;
  
`;

const myIdol = css`
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding: 30px 0px 40px 0px;
    margin-bottom: 40px;
  
    > h2 {
        font-size: 26px;
        margin-bottom: 32px;
    }
`;

const myIdolList = css`
    display: flex;
    gap: 24px;
`;

const addIdol = css`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;

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
        position: absolute;
        width: 29px;
        height: 135px;
        border-radius: 4px;
        background: rgba(27, 27, 27, 0.8);

        &.left {
            left: -57px;
        }
        
        &.right {
            right: -57px;
        }
    }
`;

const addIdolList = css`
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
`;

const addButton = css`
    display: flex;
    justify-content: center;
    margin-top: 48px;
`;

export {
	mypage,
	myIdol,
	myIdolList,
	addIdol,
	addIdolListWrapper,
	addIdolList,
	addButton,
};
