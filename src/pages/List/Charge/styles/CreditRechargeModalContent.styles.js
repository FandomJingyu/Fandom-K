// CreditRechargeModalContent.styles.js
import { css } from "@emotion/react";

// 각각의 라디오 버튼 컨테이너
export const RadioStyles = css`
  margin-bottom: 8px;
  background: var(--black-black_02000E, #02000E);
`;

// 라디오 버튼 + 텍스트 정렬
export const radioContentStyles = css`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 20px;
  font-weight: 700;
  color: var(--white-F7F7F8);

  img {
    width: 16px;
    height: 16px;
  }
`;

// 버튼 위 마진
export const buttonSpacing = css`
  margin-top: 24px;
`;
