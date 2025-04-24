import { css } from "@emotion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import Modal from "../../../../src/components/Modal";
import Button from "../../../components/Button/Button";
import { useCredit } from "../../../context/CreditContext";
import CreditRechargeModalContent from "../../List/Charge/components/CreditRechargeModalContent";
import DonationDetailTimer from "./DonationDetailTimer";
/** @jsxImportSource @emotion/react */

export default function DonationDetailInfo({ donation, loading }) {
	const { idol, receivedDonations, targetDonation, deadline, subtitle, title } =
		donation;

	const [credit, setCredit] = useState(0);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isScrollDown, setIsScrollDown] = useState(false);
	const [isError, setIsError] = useState(false);

	const handleCredit = (label, value) => {
		let newCredit;

		if (label === "전액") {
			newCredit = value;
		} else {
			newCredit = credit + value;
		}

		// 보유 크레딧보다 많은지 확인
		const isOverLimit = newCredit > (myCredit.credit || 0);

		// 에러 상태 업데이트
		setIsError(isOverLimit);

		// 크레딧 값 업데이트
		setCredit(newCredit);

		// 에러 메시지 표시 또는 최대값으로 제한
		if (isOverLimit) {
			alert("보유한 크레딧을 초과할 수 없습니다.");
			setCredit(myCredit.credit || 0); // 최대값으로 제한
		}
	};
	const myCredit = useCredit();
	const openModal = () => {
		setIsModalOpen(true);
	};
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
			value: myCredit.credit,
		},
	];
	const closeModal = () => {
		setIsModalOpen(false);
	};

	// * window의 스크롤 위치 구하기,
	// * 스크롤 위치가 400px 이상이면 isScrollDown을 true로 설정
	useEffect(() => {
		const handleWindowScroll = () => {
			const scrollTop =
				window.pageYOffset || document.documentElement.scrollTop;
			if (scrollTop > 400) {
				setIsScrollDown(true);
			} else {
				setIsScrollDown(false);
			}
		};

		window.addEventListener("scroll", handleWindowScroll);
		return () => window.removeEventListener("scroll", handleWindowScroll);
	}, []);

	const inputOnChange = (e) => {
		const value = e.target.value.replace(/[^0-9]/g, "");
		const newValue = value === "" ? 0 : Number(value);

		// 입력값이 보유 크레딧보다 크면 에러 상태로 설정
		setIsError(newValue > myCredit.credit);
		setCredit(newValue);
	};
	return (
		<>
			<form css={DonationDetailInfoStyle}>
				{loading ? (
					<div>로딩중...</div>
				) : (
					<>
						<div className={`hideTop ${isScrollDown ? "isScrollDown" : ""}`}>
							<h3>
								<strong>{idol.name}</strong>({idol.group})
							</h3>
							<p>
								{subtitle}&nbsp;-&nbsp;{title}
							</p>
						</div>
						<div css={DonationDetailInfoItem}>
							<span>모인 금액</span>
							<p>
								<strong>{receivedDonations.toLocaleString()}</strong>
								&nbsp;/&nbsp;
								{targetDonation.toLocaleString()} 크레딧
							</p>
						</div>
						<div css={DonationDetailInfoItem}>
							<DonationDetailTimer deadline={deadline} />
						</div>
						<div css={DonationDetailInfoItem} className="isCredit">
							<span className="myCredit">
								내 크레딧 :{" "}
								{myCredit.credit ? myCredit.credit.toLocaleString() : 0}
								<button type="button" onClick={openModal}>
									충전하기 +
								</button>
							</span>
							<div className={`input ${isError ? "isError" : ""}`}>
								<input
									type="text"
									name=""
									id=""
									placeholder="크레딧 입력"
									value={credit === 0 ? "" : credit.toLocaleString()}
									onChange={inputOnChange}
								/>
								<span>❗크레딧이 부족합니다.</span>
							</div>
							<ul>
								{creditList.map((credit) => (
									<li key={credit.value}>
										<button
											type="button"
											onClick={() => handleCredit(credit.label, credit.value)}
										>
											{credit.label}
										</button>
									</li>
								))}
							</ul>
						</div>
						<Button
							disabled={credit === 0 || isError}
							fullWidth
							type="button"
							variant="primary"
						>
							후원하기
						</Button>
					</>
				)}
			</form>
			<Modal isOpen={isModalOpen} onClose={closeModal} type="credit">
				<CreditRechargeModalContent myCredit={credit} closeModal={closeModal} />
			</Modal>
		</>
	);
}
const DonationDetailInfoStyle = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 600px;
  position: sticky;
  overflow: hidden;
  top: 120px;
  padding: 30px 20px;
  background-color: var(--black-02000E);
  border: 1px solid var(--pink-FE5493);
  border-radius: 10px;
  .hideTop {
    font-size: 20px;
    color: #fff;
    line-height: 1.4;
    max-width: 100%;
    overflow: hidden;
    margin-bottom: 20px;
    margin-top: calc((20px + 2.8em) * -1);
    opacity: 0;
    transition:
      margin 0.3s ease,
      opacity 0.3s ease;
    p {
      font-size: 18px;
      display: block;
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    &.isScrollDown {
      margin-top: 0;
      opacity: 1;
    }
  }

  button {
    height: 60px;
    border-radius: 10px;
    font-size: 18px;
    font-weight: 500;
  }
  .ellipsis-text {
    display: block;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
const DonationDetailInfoItem = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 14px;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 20px;
  strong {
    line-height: 1;
    font-size: 30px;
    color: #fff;
  }
  .input {
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.1);
    display: flex;
    padding-inline: 24px 54px;
    font-size: 18px;
    font-weight: 500;
    background-image: url('/icons/icon_credit.svg');
    background-size: 24px;
    background-position: right 24px center;
    background-repeat: no-repeat;
    input[type='text'] {
      height: 60px;
      flex: 1;
      outline: none;
    }
    span {
      display: none;
      font-size: 12px;
      color: rgba(255, 0, 0, 0.6);
      font-weight: 500;
      align-items: center;
    }
    &.isError {
      span {
        display: flex;
      }
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
  &.isCredit {
    margin-bottom: auto;
  }
`;
