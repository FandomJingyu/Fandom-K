import Modal from "@/components/Modal";
import { useCredit } from "@/context/CreditContext";
import { css } from "@emotion/react";
import gsap from "gsap";
import { useCallback, useEffect, useRef, useState } from "react";
import CreditRechargeModalContent from "./CreditRechargeModalContent";
/** @jsxImportSource @emotion/react */

export default function CreditCharge() {
	const { credit } = useCredit();
	const creditRef = useRef(null);
	const animationRef = useRef(null);
	const previousCreditRef = useRef(0);
	const isInitialMount = useRef(true);
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
		});
	}, []);

	useEffect(() => {
		// credit이 변했을 때만(충전시에만) 애니메이션 호출되고,
		// 초기 렌더링 시에는 0부터 카운트업
		if (typeof credit === "number") {
			if (isInitialMount.current) {
				countCredit(0, credit);
				previousCreditRef.current = credit;
				isInitialMount.current = false;
			} else if (previousCreditRef.current !== credit) {
				countCredit(previousCreditRef.current, credit);
				previousCreditRef.current = credit;
			}
		}
	}, [countCredit, credit]);

	return (
		<>
			<div css={CreditChargeStyle}>
				<div>
					<p>내 크레딧</p>
					<div className="credit">
						<img src="/icons/icon_credit.svg" alt="credit" />
						<span ref={creditRef}>0</span>
					</div>
				</div>
				<button type="button" onClick={openModal}>
					충전하기 <img src="/icons/icon_credit.svg" alt="credit" />
				</button>
			</div>
			<Modal isOpen={isModalOpen} onClose={closeModal} type="credit">
				<CreditRechargeModalContent closeModal={closeModal} />
			</Modal>
		</>
	);
}

// 스타일 컴포넌트 정의
const CreditChargeStyle = css`
  z-index: 2;
  background-color: var(--black-02000E);
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
    display: flex;
    align-items: center;
    gap: 4px;
    color: var(--orange-F96D69);
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0.8px;
    margin-right: -24px;
    transition: margin-right 0.3s ease-in-out;
    img {
      width: 24px;
      opacity: 0;
      transition: opacity 0.2s ease-in-out;
    }
    &:hover {
      margin-right: 0;
      img {
        opacity: 1;
        animation: rotate 0.6s 0.2s linear 1;
        @keyframes rotate {
          from {
            transform: perspective(100px) rotateY(0deg);
          }
          to {
            transform: perspective(100px) rotateY(360deg);
          }
        }
      }
    }
  }
  @media all and (max-width: 768px) {
    padding-inline: 3.13vw;
    height: 17.06vw;
    button {
      margin-right: 0;
      font-size: 2.34vw;
      img {
        display: none;
      }
    }
    > div {
      gap: 1.82vw;
    }
    p {
      font-size: 2.34vw;
    }
    .credit {
      gap: 0.52vw;
      span {
        font-size: 3.13vw;
      }
      img {
        width: 2.6vw;
      }
    }
  }
  @media all and (max-width: 425px) {
    padding-inline: 4.71vw;
    height: 20.47vw;
    button {
      margin-right: 0;
      font-size: 3.76vw;
      img {
        display: none;
      }
    }
    > div {
      gap: 1.88vw;
    }
    p {
      font-size: 3.06vw;
    }
    .credit {
      gap: 0.94vw;
      span {
        font-size: 4.71vw;
      }
      img {
        width: 4.71vw;
      }
    }
  }
`;
