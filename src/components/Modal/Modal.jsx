/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import closeImg from "../../../public/images/btn-modal-close.png";

const Modal = ({ isOpen, onClose, children }) => {
	const [modalOpen, setModalOpen] = useState(isOpen);

	// isOpen 값이 변경될 때마다 modalOpen 상태 업데이트
	useEffect(() => {
		setModalOpen(isOpen);
	}, [isOpen]);

	// 모달을 닫는 공통 함수
	const handleClose = () => {
		onClose(); // 모달 닫기
	};

	const handleKeyDown = (e) => {
		// 배경 영역에서 키보드 이벤트 처리
		if (e.key === "Escape") {
			onClose(); // ESC 키로 모달 닫기
		} else if (e.key === "Enter" || e.key === " ") {
			onClose(); // Enter 또는 스페이스 키로도 모달 닫기
		}
	};

	// 모달이 열려 있을 때만 렌더링
	return (
		modalOpen && (
			<div
				css={modalOverlayStyles} // 모달의 배경
				onClick={handleClose} // 배경 클릭 시 모달 닫기
				onKeyDown={handleKeyDown}
				role="presentation" // 접근성을 위한 역할(role) 설정
			>
				<div
					css={modalContentStyles} //모달 내부의 실제 콘텐츠 박스
					onClick={(e) => e.stopPropagation()} // 배경 클릭 시 모달 닫히지 않도록
					onKeyDown={(e) => e.stopPropagation()} // 키보드 입력도 전파 막기
				>
					{children}
					<button css={buttonStyles} onClick={handleClose} type="button">
						<img src={closeImg} alt="모달 창 닫기 버튼" />
					</button>{" "}
				</div>
			</div>
		)
	);
};

export default Modal;
