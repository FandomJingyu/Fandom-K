import { donationsAPI } from "@/apis/donationsAPI";
import Button from "@/components/Button/Button";
import Modal from "@/components/Modal";
import { useCredit } from "@/context/CreditContext";
import useSafeSubmit from "@/hooks/useSafeSubmit";
import CreditRechargeModalContent from "@/pages/List/Charge/components/CreditRechargeModalContent";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import DonationDetailTimer from "./DonationDetailTimer";

export default function DonationDetailInfo({ donation, loading }) {
	const { idol, receivedDonations, targetDonation, deadline, subtitle, title } =
		donation;

	const [credit, setCredit] = useState(0);
	const myCredit = useCredit();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isScrollDown, setIsScrollDown] = useState(false);
	const [isError, setIsError] = useState(false);
	const [donatedAmount, setDonatedAmount] = useState(receivedDonations);
	const { isSubmitting, safeSubmit } = useSafeSubmit(async () => {
		if (credit === 0 || isError) return;

		try {
			await donationsAPI.contribute(donation.id, credit);
			myCredit.deductCredit(credit);
			setDonatedAmount((prev) => prev + credit);
			toast.success("후원에 성공하셨습니다!");
			setCredit(0);
		} catch (error) {
			console.error("후원 처리 중 오류 발생:", error);
			alert(error.message || "후원 처리 중 오류가 발생했습니다.");
		}
	});

	const handleCredit = (label, value) => {
		let newCredit;

		if (label === "전액") {
			newCredit = value;
		} else {
			newCredit = credit + value;
		}

		changeCredit(newCredit);
	};

	const inputRef = useRef(null);
	const inputOnChange = (e) => {
		const el = inputRef.current;
		const rawValue = e.target.value;
		const cursorPos = el.selectionStart;

		// 쉼표 제거
		const cleanValue = rawValue.replace(/[^0-9]/g, "");
		const numericValue = cleanValue === "" ? 0 : Number(cleanValue);

		// 상태 업데이트
		changeCredit(numericValue, rawValue, cursorPos);
	};

	const changeCredit = (value, rawValue, prevCursorPos) => {
		const availableCredit = myCredit.credit || 0;
		const diffCredit = targetDonation - donatedAmount;

		const clampedValue = Math.min(value, diffCredit, availableCredit);

		if (value > diffCredit || value > availableCredit) {
			const message =
				value > diffCredit
					? "목표 금액을 초과할 수 없습니다."
					: "보유한 크레딧을 초과할 수 없습니다.";

			toast.error(message, {
				toastId: "credit-error",
			});
		}

		setCredit(clampedValue);

		// 커서 복원
		setTimeout(() => {
			if (!inputRef.current) return;

			// 새 포맷된 문자열
			const formatted = clampedValue === 0 ? "" : clampedValue.toLocaleString();

			// 이전 값에서 커서까지 몇 개의 숫자가 있었는지 계산
			const numbersBeforeCursor = rawValue
				.slice(0, prevCursorPos)
				.replace(/[^0-9]/g, "").length;

			// 새 포맷 문자열에서 그 숫자 위치를 다시 찾음
			let newCursorPos = 0;
			let digitsSeen = 0;

			for (let i = 0; i < formatted.length; i++) {
				if (/\d/.test(formatted[i])) digitsSeen++;
				if (digitsSeen === numbersBeforeCursor) {
					newCursorPos = i + 1;
					break;
				}
			}

			inputRef.current.setSelectionRange(newCursorPos, newCursorPos);
		}, 0);
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

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	// 스크롤 내리면 box 내부에 제목 표시
	useEffect(() => {
		if (window.innerWidth <= 768) return;
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
			<form onSubmit={safeSubmit} css={DonationDetailInfoStyle}>
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
								<strong>{donatedAmount.toLocaleString()}</strong>
								&nbsp;/&nbsp;
								{targetDonation.toLocaleString()} 크레딧
							</p>
						</div>
						<div css={DonationDetailInfoItem}>
							<DonationDetailTimer deadline={deadline} />
						</div>
						<div css={DonationDetailInfoItem} className="isCredit">
							<div className="myCredit">
								내 크레딧 :{" "}
								{myCredit.credit ? myCredit.credit.toLocaleString() : 0}
								<button type="button" onClick={openModal}>
									충전하기 +
								</button>
							</div>
							<div className="input">
								<input
									type="text"
									placeholder="크레딧 입력"
									value={credit === 0 ? "" : credit.toLocaleString()}
									onChange={inputOnChange}
									ref={inputRef}
								/>
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
							disabled={credit === 0 || isError || isSubmitting}
							fullWidth
							type="submit"
							variant="primary"
						>
							{isSubmitting ? "후원 처리 중..." : "후원하기"}
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
  z-index: 99;
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

  > button {
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
  @media all and (max-width: 1300px) {
    top: 80px;
  }
  @media all and (max-width: 1024px) {
    height: auto;
    > button {
      margin-top: 30px;
    }
  }
  @media all and (max-width: 768px) {
    position: static;
    padding: 3.91vw 2.6vw;
    .hideTop {
      margin-top: 0;
      opacity: 1;
      font-size: 3.13vw;
      margin-bottom: 2.6vw;
      p {
        font-size: 2.6vw;
      }
    }
    > button {
      margin-top: 0;
      height: 7.81vw;
      font-size: 2.86vw;
      border-radius: 1.3vw;
    }
  }
  @media all and (max-width: 425px) {
    .hideTop {
      font-size: 4.71vw;
      margin-bottom: 2.35vw;
      p {
        font-size: 3.76vw;
      }
    }
    > button {
      height: 11.76vw;
      font-size: 3.76vw;
    }
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
    position: relative;
    input[type='text'] {
      height: 60px;
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
  &.isCredit {
    margin-bottom: auto;
  }
  @media all and (max-width: 768px) {
    gap: 1.3vw;
    font-size: 2.08vw;
    margin-bottom: 2.6vw;
    strong {
      font-size: 3.91vw;
    }
    .input {
      border-radius: 1.3vw;
      padding-inline: 3.13vw 8.03vw;
      font-size: 2.34vw;
      background-size: 3.13vw;
      background-position: right 3.13vw center;
      input[type='text'] {
        height: 7.81vw;
        min-width: 0;
        width: 100%;
      }
    }
    &.isCredit {
      margin-bottom: 3.91vw;
    }
  }
  @media all and (max-width: 425px) {
    font-size: 3.29vw;
    margin-bottom: 5.65vw;
    gap: 1.88vw;
    strong {
      font-size: 5.18vw;
    }
    ul {
      gap: 2.35vw;
      li {
        button {
          height: 7.53vw;
          font-size: 3.29vw;
        }
      }
    }
    .input {
      padding-inline: 3.13vw 9.41vw;
      font-size: 3.76vw;
      background-size: 5.65vw;
      background-position: right 3.29vw center;
      input[type='text'] {
        height: 11.76vw;
      }
    }
    &.isCredit {
      margin-bottom: 5.65vw;
    }
    .myCredit {
      button {
        height: 6.59vw;
        font-size: 2.82vw;
      }
    }
  }
`;
