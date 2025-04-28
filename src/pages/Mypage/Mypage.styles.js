import { css } from "@emotion/react";

//나의 아이돌
const myIdolWrapper = css`
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding: 70px 0px 40px 0px;
    color: white;

    > h2 {
        font-size: 26px;
        margin-bottom: 32px;
    }

    > h3 {
        font-size: 20px;
        color: rgba(255, 255, 255, 0.6)
    }

    @media (max-width: 768px) {
        > h2 {
        font-size: 20px;
        margin-bottom: 24px;
        }   

        > h3 {
        font-size: 16px;
        }
    }

    @media (max-width: 425px) {
        > h2 {
        font-size: 16px;
        margin-bottom: 12px;
        }   
        > h3 {
        font-size: 12px;
        }
    }
`;

// 나의 아이돌 리스트
const myIdolList = css`
    display: flex;
    gap: 22px;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
        display: none;
    }
    `;

// 아이돌 추가하기
const addIdol = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    color: white;

    > h2 {
        font-size: 26px;
        margin-top: 40px;
        margin-bottom: 32px;
    }

    @media (max-width: 768px) {
        > h2 {
        font-size: 20px;
        margin-top: 32px;
        margin-bottom: 56px;
        }
    }

    @media (max-width: 425px) {
        > h2 {
        font-size: 16px;
        margin-top: 32px;
        margin-bottom: 16px;
        }
    }
`;

// 추가하기 버튼
const addButton = css`
    display: flex;
    justify-content: center;
    margin-top: 48px;
`;

export { myIdolWrapper, myIdolList, addIdol, addButton };
