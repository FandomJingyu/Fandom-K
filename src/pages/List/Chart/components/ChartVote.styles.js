import { css } from "@emotion/react";

export const ModalWrapper = css`
  color: white;
  padding: 1rem;
`;

export const CreditInfo = css`
  color: var(--white-FFFFFF);
  font-size: 12px;
  font-weight: 500;
  line-height: 26px;

  span {
    color: var(--orange-F96D69);
  }
`;

export const IdolList = css`
  max-height: 300px;
  overflow-y: auto;
  margin-bottom: 1rem;
`;

export const IdolItem = css`
  border-bottom: 1px solid var(--gray-D9D9D9);
  padding: 1rem 0;
`;

export const IdolInfo = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const RadioContent = css`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
