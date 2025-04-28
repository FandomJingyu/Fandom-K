/** @jsxImportSource @emotion/react */
import React, { useEffect } from "react";
import closeArrow from "/public/icons/icon-arrow-left.svg";
import closeImg from "/public/images/btn-modal-close.png";
import useIsMobile from "../../hooks/useIsMobile";
import {
	backdropStyles,
	buttonStyles,
	modalHeaderStyles,
	modalStyles,
	rootStyles,
} from "./Modal.styles";
import ModalPortal from "./ModalPortal";

/**
 * @param {Object} props
 * @param {boolean} props.isOpen
 * @param {Function} props.onClose
 * @param {React.ReactNode} props.children
 */

const modalData = {
	credit: {
		title: "크레딧 충전",
	},
	voteWoman: {
		title: "이달의 여자 아이돌",
	},
	voteMan: {
		title: "이달의 남자 아이돌",
	},
	default: {
		title: "기본 모달",
	},
};

const Modal = ({
	isOpen,
	onClose,
	children,
	type = "default",
	isMobileFullScreen = false,
}) => {
	const isMobile = useIsMobile(); // 여기에서 조건을 하지 않고 항상 호출됨
	const isFullScreen = isMobile && isMobileFullScreen;

	const { title } = modalData[type] || modalData.default; // type에 맞는 title 가져오기

	// 모달이 열릴 때 body에 overflow-y: hidden 적용
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflowY = "hidden"; // 세로 스크롤만 막기
		} else {
			document.body.style.overflowY = ""; // 원래 상태로 복원
		}

		// 클린업: 모달이 닫히면 스크롤 복원
		return () => {
			document.body.style.overflowY = "";
		};
	}, [isOpen]);

	if (!isOpen) return null;

	const handleKeyDown = (event) => {
		// Enter 키 또는 Space 키를 눌렀을 때 모달 닫기
		if (event.key === "Enter" || event.key === " ") {
			onClose();
		}
	};

	return (
		<ModalPortal>
			<div css={rootStyles(isFullScreen)}>
				{/* Backdrop */}
				<button
					css={backdropStyles}
					onClick={onClose}
					onKeyDown={handleKeyDown}
					type="button"
					aria-label="모달 닫기"
				>
					{/* 비어 있는 버튼이지만 키보드 포커스와 역할이 명확함 */}
				</button>
				{/* Modal */}
				<div css={modalStyles(isFullScreen, type)}>
					<div css={modalHeaderStyles(isFullScreen)}>
						<h2>{title}</h2>
						<button
							css={buttonStyles(isFullScreen)}
							onClick={onClose}
							onKeyDown={handleKeyDown} // 키보드 이벤트 처리
							type="button"
							aria-label="모달 창 닫기" // 접근성을 위한 aria-label
						>
							<img
								src={isFullScreen ? closeArrow : closeImg}
								alt="모달 닫기 버튼"
							/>
						</button>
					</div>
					{/* Modal Content */}
					{/* 모달 오픈시 lenis스크롤 막는 data-lenis-prevent 속성 추가 */}
					<div data-lenis-prevent="true">{children}</div>
				</div>
			</div>
		</ModalPortal>
	);
};

export default Modal;
