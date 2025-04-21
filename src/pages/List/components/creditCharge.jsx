import styled from "@emotion/styled";
import gsap from "gsap";
import { useCallback, useEffect, useRef, useState } from "react";
import Modal from "../../../../src/components/Modal";
import { useCredit } from "../../../context/CreditContext";
import CreditRechargeModalContent from "./CreditRechargeModalContent";

export default function CreditCharge() {
	const { credit } = useCredit();
	const creditRef = useRef(null);
	const animationRef = useRef(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	// 크레딧 카운트업 애니메이션 함수
	const countCredit = useCallback((startValue, endValue) => {
		// 이전 애니메이션이 실행 중이라면 중단
		if (animationRef.current) {
			animationRef.current.kill();
		}

		// GSAP 초기값으로 사용
		const counter = {
			credit: startValue,
		};

		// 애니메이션 중 state를 건드리지 않고 DOM만 업데이트
		const updateDisplay = () => {
			if (creditRef.current) {
				creditRef.current.textContent = Math.floor(
					counter.credit,
				).toLocaleString();
			}
		};

		animationRef.current = gsap.to(counter, {
			credit: endValue,
			duration: 2,
			ease: "power3.out",
			onUpdate: updateDisplay, // 매 프레임마다 실행될 함수
			onComplete: () => {
				// 애니메이션이 완료되면 최종값을 state에 반영
				setCredit(endValue);
			},
		});
	}, []);

	// 크레딧 선택 시 업데이트 함수
	const handleCreditSelect = (selectedCredit) => {
		setCredit(selectedCredit); // 선택된 크레딧 값으로 업데이트
	};

	// 최초 마운트 시에만 실행
	useEffect(() => {
		countCredit(0, credit);
	}, [countCredit, credit]);

	return (
		<>
			<StyledCreditCharge>
				<div>
					<p>내 크레딧</p>
					<div className="credit">
						<img src="/icons/icon_credit.svg" alt="credit" />
						<span id="credit" ref={creditRef}>
							{credit.toLocaleString()}
						</span>
					</div>
				</div>
				<button type="button" onClick={openModal}>
					충전하기
				</button>
			</StyledCreditCharge>

			{/* 모달 내부에 선택된 크레딧 값을 업데이트할 함수 전달 */}
			<Modal isOpen={isModalOpen} onClose={closeModal} type="credit">
				<CreditRechargeModalContent
					myCredit={credit} // 현재 크레딧 전달
					closeModal={closeModal} // 모달을 닫는 함수 전달
				/>
			</Modal>
		</>
	);
}

// 스타일 컴포넌트 정의
const StyledCreditCharge = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 78px;
  height: 130px;
  border: 1px solid rgba(241, 238, 249, 0.8);
  border-radius: 8px;
  > div {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
  p {
    color: rgba(255, 255, 255, 0.6);
    font-size: 16px;
    font-weight: 400;
  }
  .credit {
    display: flex;
    align-items: center;
    gap: 4px;
    span {
      color: rgba(255, 255, 255, 0.87);
      font-size: 24px;
      font-weight: 700;
      line-height: 1;
    }
  }
  button {
    color: var(--orange-F96D69);
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0.8px;
  }
`;
