/** @jsxImportSource @emotion/react */
import React from "react";
import closeImg from "../../../public/images/btn-modal-close.png";
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
	donation: {
		title: "후원하기",
	},
	credit: {
		title: "크레딧 충전",
	},
	voteWoman: {
		title: "이달의 여자 아이돌",
	},
	voteMan: {
		title: "이달의 남자 아이돌",
	},
	insufficientCredits: {
		title: "크레딧 부족", // 크레딧 부족 모달에 맞는 title
	},
	default: {
		title: "기본 모달",
	},
};

const Modal = ({ isOpen, onClose, type = "default", children }) => {
	if (!isOpen) return null;

	const { title } = modalData[type] || modalData.default; // type에 맞는 title 가져오기

	const handleKeyDown = (event) => {
		// Enter 키 또는 Space 키를 눌렀을 때 모달 닫기
		if (event.key === "Enter" || event.key === " ") {
			onClose();
		}
	};

	return (
		<ModalPortal>
			<div css={rootStyles}>
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
				<div css={modalStyles}>
					<div css={modalHeaderStyles}>
						<h2>{title}</h2>
						<button
							css={buttonStyles}
							onClick={onClose}
							onKeyDown={handleKeyDown} // 키보드 이벤트 처리
							type="button"
							aria-label="모달 창 닫기" // 접근성을 위한 aria-label
						>
							<img src={closeImg} alt="모달 창 닫기 버튼" />
						</button>
					</div>
					{/* Modal Content */}
					{children}
				</div>
			</div>
		</ModalPortal>
	);
};

export default Modal;
