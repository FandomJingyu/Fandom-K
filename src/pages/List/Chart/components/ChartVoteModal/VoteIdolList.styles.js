import { css } from "@emotion/react";

export const IdolList = css`
  max-height: 522px; /* 6개가 보일 수 있게 높이 고정 (예시) */
  overflow-y: auto;
  overflow-x: hidden;
  margin-bottom: 20px;

  /* 웹킷 기반 브라우저용 스크롤바 스타일 */
  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(249, 109, 105, 0.5); /* 반투명한 오렌지 색 (50% 투명도) */
    border-radius: 3px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }


  @media (max-width: 425px) {
    max-height: calc(100vh - 17.88vw); /* 버튼 영역 + 여유 */
    padding-bottom: 24vw;            /* 리스트 아이템 마지막 여백 */
  }

`;

export const IdolItem = css`
  align-items: center;
  height: 70px;
  margin-bottom: 17px;

  /* 밑줄 스타일 */
  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background: rgba(255, 255, 255, 0.1);
    align-self: stretch;
    margin: 11px 0;
  }
`;

export const RadioContent = css`
  position: relative; /* ✅ CheckIdol 기준점 */ 
  display: flex;
  align-items: center;
  gap: 12px;
  
`;

export const IdolInfo = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  
`;

export const Rank = css`
  color: var(--orange-F96D69);
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
`;

export const IdolName = css`
  color: #FFFFFF;
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;

  display: flex;
  gap: 4px;
`;

export const IdolDetails = css`
  display: flex;
  flex-direction: column;
  gap: 4px;
 
`;

export const IdolVote = css`
  color: rgba(255, 255, 255, 0.60);
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
  text-align: left;
`;
