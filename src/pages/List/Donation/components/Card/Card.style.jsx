/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const donationCardContainer = css`
display: flex;
width: 282px;
height: 402px;
flex-direction: column;
justify-content: center;
align-items: center;
flex-shrink: 0;
`;

export const donatioImgContainer = css`
  position: relative;
  width: 282px;
  height: 293px;
`;

export const imgWrapper = css`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
`;

export const donationImg = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  position: relative;
  z-index: 1;
`;

export const overlaySvg = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
`;

export const donationButton = css`
position: absolute;
bottom: 30px;
left: 22px;

width: 234px;
height: 40px;
border-radius: 3px;
background: linear-gradient(90deg, #F86F65 0%, #FE5493 100%); 
z-index: 3;
`;

export const donationDescription = css`
display: flex;
width: 282px;
flex-direction: column;
align-items: flex-start;
gap: 24px;
`;
export const donationTitleContainer = css`
display: flex;
width: 154px;
flex-direction: column;
align-items: flex-start;
gap: 8px;`;

export const descriptionSubtitle = css`
color: #FFF;

text-align: center;
font-family: Pretendard;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 18px; /* 112.5% */
letter-spacing: -0.165px;

opacity: 0.4;
`;

export const descriptionTitle = css`
color: var(--white-whtie_F7F7F8, #F7F7F8);
text-align: center;
font-family: Pretendard;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: normal;
`;

export const donationFooter = css`
display: flex;
width: 282px;
justify-content: space-between;
`;

export const donationFooterLeft = css`
display: flex;
align-items: center`;

export const creditImg = css`
width: 12px;
height: 12px`;

export const targetDonation = css`
color: var(--Fandom-K-CTA, #F96D69);
font-family: Pretendard;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 18px; /* 150% */
letter-spacing: -0.165px;`;

export const donationDday = css`
color: var(--white-whtie_F7F7F8, #F7F7F8);
text-align: right;
font-family: Pretendard;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 18px; /* 150% */
letter-spacing: -0.165px;
`;
