/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useCallback, useEffect, useState } from "react";
import { idolsAPI } from "../../apis/idolsAPI";
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

	const [totalList, setTotalList] = useState([]);
	const fetchIdols = useCallback(async () => {
		const response = await idolsAPI.getIdols(100);
		setTotalList(response.list);
	}, []);

	useEffect(() => {
		fetchIdols();
	}, [fetchIdols]);

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

			<div css={testIdolsCircle}>
				{totalList.map((item) => (
					<div key={item.id}>
						<img src={item.profilePicture} alt={item.name} />
					</div>
				))}
			</div>
			<div css={testIdolsDonation}>
				{totalList.map((item) => (
					<div key={item.id}>
						<img src={item.profilePicture} alt={item.name} />
					</div>
				))}
			</div>
		</div>
	);
};

const testIdolsCircle = css`
  width: 980px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  > div {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid var(--orange-F96D69);
    padding: 5px;
    > img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
      object-position: center top;
    }
  }
`;

const testIdolsDonation = css`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  width: 1920px;
  margin: 0 auto;
  > div {
    height: 400px;
    overflow: hidden;
    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center top;
    }
  }
`;

export default Testpage;
