/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { idolsAPI } from "../../apis/idolsAPI";
import Button from "../../components/Button/Button";
import Modal from "../../components/Modal";
import RadioButton from "../../components/RadioButton";
import { useCredit } from "../../context/CreditContext";
const Testpage = () => {
	const { credit, addCredit, deductCredit } = useCredit(); // credit context test를 위한 선언
	const credits = [100, 500, 1000]; // 라디오 버튼 test를 위한 크레딧 배열
	const [select, setSelect] = useState(null); // 라디오 버튼 test를 위한 state설정 (현재 선택된 값을 저장하는 state)
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
			{/* Toast 사용법
			 * 상단에 import { toast } from "react-toastify"; 선언
			 * 성공일 때 toast.success("나올 문구")
			 * 실패일 때 toast.error("나올 문구")
			 */}
			<Button size="donate-md" onClick={() => toast.success("이렇게 테스트!")}>
				성공일 때
			</Button>
			<Button size="donate-md" onClick={() => toast.error("애라다 애라!")}>
				실패일 때
			</Button>

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

			<Modal isOpen={isOpen} onClose={handleClose} type="credit">
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

			<div css={radio}>
				{credits.map((credit) => (
					<RadioButton
						key={credit}
						value={credit}
						checked={select === credit}
						onChange={setSelect}
						className="charge"
					>
						{credit}
					</RadioButton>
				))}
				{/* 클래스 적용 확인을 위한 test 같은 credit 배열을 사용해서 같이 작동되는 것입니다! */}
				{credits.map((credit) => (
					<RadioButton
						key={credit}
						value={credit}
						checked={select === credit}
						onChange={setSelect}
						className="vote"
					>
						{credit}
					</RadioButton>
				))}
			</div>

			{/* 크레딧 context test */}
			<div css={creditContainer}>
				<button type="button" onClick={() => addCredit(1000)}>
					크레딧 충전
				</button>
				<button type="button" onClick={() => deductCredit(100)}>
					크레딧 사용
				</button>
				<strong css={creditStyle}>현재 크레딧: {credit}</strong>
			</div>
		</div>
	);
};

// 라디오버튼 test를위한 css
const radio = css`
  color: #ffffff;
`;

// 크레딧 test를 위한 css
const creditStyle = css`
  color: #ffffff;
`;

const creditContainer = css`
  display: flex;
  gap: 24px;
`;

// API 테스트를 위한 css
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
