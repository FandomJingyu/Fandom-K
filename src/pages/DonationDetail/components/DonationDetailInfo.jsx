import { css } from "@emotion/react";
import { useState } from "react";
import Button from "../../../components/Button/Button";
/** @jsxImportSource @emotion/react */

const creditList = [
	{
		label: "+100",
		value: 100,
	},
	{
		label: "+500",
		value: 500,
	},
	{
		label: "+1,000",
		value: 1000,
	},
	{
		label: "전액",
		value: 10000,
	},
];
export default function DonationDetailInfo() {
	const [credit, setCredit] = useState(0);
	const handleCredit = (value) => {
		setCredit(value);
	};
	return (
		<form css={DonationDetailInfoStyle}>
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
			<div className="infoAreaScrollItem is-credit">
				<span className="myCredit">
					내 크레딧 : 10,000 <button type="button">충전하기 +</button>
				</span>
				<div className="input">
					<input
						type="text"
						name=""
						id=""
						placeholder="크레딧 입력"
						value={credit}
						onChange={(e) => setCredit(e.target.value)}
					/>
				</div>
				<ul>
					{creditList.map((credit) => (
						<li key={credit.value}>
							<button type="button" onClick={() => handleCredit(credit.value)}>
								{credit.label}
							</button>
						</li>
					))}
				</ul>
			</div>
			<Button type="button" size="donate-lg" variant="primary">
				후원하기
			</Button>
		</form>
	);
}
const DonationDetailInfoStyle = css`
  display: flex;
  flex-direction: column;
  gap: 30px;
  height: 600px;
  overflow: hidden;
  position: sticky;
  top: 120px;
  padding: 30px 20px;
  background-color: var(--black-02000E);
  border: 1px solid var(--pink-FE5493);
  border-radius: 10px;
  .infoAreaScrollItem {
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 14px;
    line-height: 1.4;
    color: rgba(255, 255, 255, 0.7);
    strong {
      line-height: 1;
      font-size: 30px;
      color: #fff;
    }
    .input {
      height: 60px;
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
          height: 34px;
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
    .myCredit {
      display: flex;
      align-items: center;
      gap: 10px;
      button {
        display: flex;
        align-items: center;
        gap: 12px;
        width: auto;
        padding-inline: 14px;
        height: 30px;
        border-radius: 2em;
        background: rgba(255, 0, 191, 0.2);
        font-size: 12px;
        transition: background 0.3s ease;
        &:hover {
          background: rgba(255, 0, 191, 0.3);
        }
      }
    }
    &.is-credit {
      margin-bottom: auto;
    }
  }
  button {
    width: 100%;
    height: 60px;
    border-radius: 10px;
    font-size: 18px;
    font-weight: 500;
  }
`;
