import { css } from "@emotion/react";
import { useEffect, useRef, useState } from "react";
import Modal from "../../../../src/components/Modal";
import Button from "../../../components/Button/Button";
import { useCredit } from "../../../context/CreditContext";
import CreditRechargeModalContent from "../../List/Charge/components/CreditRechargeModalContent";

/** @jsxImportSource @emotion/react */

export default function DonationDetailInfo({ donation, idol, loading }) {
	const [credit, setCredit] = useState(0);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const scrollRef = useRef(null);

	const handleCredit = (value) => {
		setCredit((prev) => prev + value);
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
	const [isScrollDown, setIsScrollDown] = useState(false);

	// window의 스크롤 위치 구하기
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

	return (
		<>
			<form css={DonationDetailInfoStyle}>
				{loading ? (
					<div>로딩중...</div>
				) : (
					<>
						<div className={`hideTop ${isScrollDown ? "isScrollDown" : ""}`}>
							<h3>
								{idol.name}({idol.group})
							</h3>
							<p>
								{donation.subtitle}&nbsp;-&nbsp;{donation.title}
							</p>
						</div>
						<div className="infoAreaScrollItem">
							<span>모인 금액</span>
							<p>
								<strong>{donation.receivedDonations.toLocaleString()}</strong>
								&nbsp;/&nbsp;
								{donation.targetDonation.toLocaleString()} 크레딧
							</p>
						</div>
						<div className="infoAreaScrollItem">
							<span>남은 시간</span>
							<p>
								<strong>110</strong>&nbsp;Days <strong>10</strong>&nbsp;:&nbsp;
								<strong>10</strong>&nbsp;:&nbsp;<strong>52</strong>
							</p>
							<p>
								모집 기간 : <span>{donation.deadline.split("T")[0]}</span>
							</p>
						</div>
						<div className="infoAreaScrollItem is-credit">
							<span className="myCredit">
								내 크레딧 :{" "}
								{myCredit.credit ? myCredit.credit.toLocaleString() : 0}
								<button type="button" onClick={openModal}>
									충전하기 +
								</button>
							</span>
							<div className="input">
								<input
									type="text"
									name=""
									id=""
									placeholder="크레딧 입력"
									value={credit.toLocaleString()}
									onChange={(e) => setCredit(e.target.value)}
								/>
							</div>
							<ul>
								{creditList.map((credit) => (
									<li key={credit.value}>
										<button
											type="button"
											onClick={() => handleCredit(credit.value)}
										>
											{credit.label}
										</button>
									</li>
								))}
							</ul>
						</div>
						<Button fullWidth type="button" variant="primary">
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
    margin-bottom: 30px;
    margin-top: calc((30px + 2.8em) * -1);
    opacity: 0;
    transition: margin 0.3s ease, opacity 0.3s ease;
    p {
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
