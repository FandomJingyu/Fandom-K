import React, { useState } from "react";
import Button from "../../components/Button/Button";
import Modal from "../../components/Modal";

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

			<Button size={"donate-md"} disabled={false}>
				후원하기
			</Button>
			<Button size={"donate-lg"} disabled={true}>
				후원하기
			</Button>

			<Modal isOpen={isOpen} onClose={handleClose} title="모달 컨텐츠">
				<p>여기에 모달 내용이 들어갑니다.</p>
			</Modal>
		</div>
	);
};

export default Testpage;
