import { css } from "@emotion/react";
import Button from "../../components/Button/Button";
import DonationDetailText from "./DonationDetailText";
/** @jsxImportSource @emotion/react */

export default function DonationDetail() {
	return (
		<div className="mainGrid" css={DonationDetailStyle}>
			<div css={DonationDetailTop}>
				<h2>
					제니 <span>(블랙핑크)</span>
				</h2>
				<div>
					<p>'30번째 생일 축하'&nbsp;-&nbsp;</p>
					<p>합정역 광고</p>
				</div>
			</div>
			<div css={DonationDetailContent}>
				<div className="contentArea">
					<div className="profile">
						<img src="/mocks/mock04.png" alt="" />
					</div>
					<DonationDetailText />
				</div>
				<div className="infoArea">
					<form className="infoAreaScroll">
						<div className="infoAreaScrollItem">
							<span>모인 금액</span>
							<p>
								<strong>100,000</strong> /&nbsp;100,000 크레딧
							</p>
						</div>
						<div className="infoAreaScrollItem">
							<span>남은 시간</span>
							<p>
								<strong>110</strong>&nbsp;Days <strong>10</strong>&nbsp;:&nbsp;
								<strong>10</strong>&nbsp;:&nbsp;<strong>52</strong>
							</p>
							<p>
								모집 기간 : <span>2025.08.11</span>
							</p>
						</div>
						<div className="infoAreaScrollItem">
							<span>
								내 크레딧 : 10,000 <button type="button">+</button>
							</span>
							<div className="input">
								<input type="text" name="" id="" placeholder="크레딧 입력" />
							</div>
							<ul>
								<li>
									<button type="button">+100</button>
								</li>
								<li>
									<button type="button">+500</button>
								</li>
								<li>
									<button type="button">+1,000</button>
								</li>
								<li>
									<button type="button">전액</button>
								</li>
							</ul>
						</div>
						<Button
							css={DonationDetailButton}
							type="button"
							size="donate-lg"
							variant="primary"
						>
							후원하기
						</Button>
					</form>
				</div>
			</div>
		</div>
	);
}

const DonationDetailStyle = css`
  padding-block: 80px;
  color: #fff;
  &::after {
    content: '';
    display: block;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30%;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 58.9%, #000 100%);
  }
`;

const DonationDetailTop = css`
  text-align: center;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h2 {
    font-size: 48px;
    line-height: 1;
    font-weight: bold;
    margin-bottom: 30px;
  }
  p {
    font-size: 16px;
    font-weight: bold;
    font-size: 30px;
  }
`;

const DonationDetailContent = css`
  position: relative;
  height: 100%;
  margin-top: 100px;
  display: flex;
  gap: 100px;
  .contentArea {
    width: 600px;
    flex: none;
    .profile {
      width: 100%;
      height: 100%;
      border-radius: 10px;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
  }
  .infoArea {
    flex: 1;
  }
  .infoAreaScroll {
    display: flex;
    flex-direction: column;
    gap: 40px;
    height: 600px;
    overflow: hidden;
    position: sticky;
    top: 120px;
  }
  .infoAreaScrollItem {
    display: flex;
    flex-direction: column;
    gap: 6px;
    font-size: 16px;
    line-height: 1.4;
    color: rgba(255, 255, 255, 0.7);
    strong {
      font-size: 30px;
      color: #fff;
    }
    .input {
      height: 64px;
      border-radius: 10px;
      background: rgba(255, 255, 255, 0.1);
      display: flex;
      padding-inline: 24px;
      font-size: 18px;
      font-weight: 500;
      background-image: url('/icons/icon_credit.svg');
      background-size: 24px;
      background-position: right 24px center;
      background-repeat: no-repeat;
      input[type='text'] {
        flex: 1;
        outline: none;
      }
    }
    ul {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 10px;
      li {
        display: flex;
        align-items: center;
        justify-content: center;
        button {
          width: 100%;
          height: 38px;
          border-radius: 2em;
          background: rgba(255, 0, 191, 0.1);
          font-size: 14px;
          color: rgba(255, 255, 255, 0.5);
          transition: color 0.3s ease;
        }
        &:hover {
          button {
            color: #fff;
          }
        }
      }
    }
  }
`;

const DonationDetailButton = css`
  margin-top: auto;
`;
