import React, { useState } from "react";
import Modal from "../../components/Modal/Modal";
import Card from "../List/Donation/components/Card";

const Testpage = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleClose = () => {
		setIsOpen(false);
	};

	const handleOpen = () => {
		setIsOpen(true);
	};

	return (
		<div>
			<h1>모달 테스트</h1>
			<button type="button" onClick={handleOpen}>
				모달 열기
			</button>

			<Modal isOpen={isOpen} onClose={handleClose} title="모달 컨텐츠">
				<p>여기에 모달 내용이 들어갑니다.</p>
			</Modal>
			<Card />
		</div>
	);
};

export default Testpage;
