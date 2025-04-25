/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  
  height: 100vh;
  overflow-y: auto;
  `;

export const imgContainer = css`
position: relative;
width: 350px;
height: 350px;

@media(max-width: 769px) {
 width: 200px;
 height: 200px;
}`;

export const imgIdol = css`
position: relative;
width: 100%;
height: 100%;
opacity: 0.7;

object-fit: cover;
`;

export const overlay = css`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: radial-gradient(
  50% 50% at 50% 50%,
  rgba(2, 0, 14, 0) 0%,
  rgba(2, 0, 14, 0.18) 37.5%,
  rgba(2, 0, 14, 0.5) 79.5%,
  #02000e 100%
  );
  `;

export const text = css`
  color: #ffffff;
  text-align: center;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  
  gap: 30px;
  
  @media(max-width: 769px) {
  gap: 20px;
  }
  `;

export const logo = css`
  width: 200px;
  
  opacity: 0.5;
  
  z-index: 3;
  
@media(max-width: 769px) {
 width: 100px;
}`;

export const title = css`
font-size: 30px;
font-weight: 800;

@media(max-width: 769px) {
 font-size: 20px;
 font-weight: 600;
}`;

export const description = css`
font-size: 15px;
color: var(--gray-A3A5A8);

@media(max-width: 769px) {
 font-size: 13px;
}`;

export const buttons = css`
display: flex;
gap: 30px;
`;

export const button = css`
width: 150px;
height: 40px;
border: 1px solid #ffffff;
border-radius: 30px;

font-size: 15px;

&:hover {
background: linear-gradient(90deg, #F86F65 0%, #FE5493 100%);
border: none;
}

@media(max-width: 769px) {
  width: 110px;
  height: 30px;

  font-size: 12px;
}`;
