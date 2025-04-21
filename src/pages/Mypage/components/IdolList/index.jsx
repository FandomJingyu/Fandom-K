import { useEffect, useState } from "react";
import { idolsAPI } from "../../../../apis/idolsAPI";
import { idolFace, idolList } from "./IdolList.styles";
/** @jsxImportSource @emotion/react */

const IdolList = () => {
	// api에서 온 아이돌을 담을 idols
	const [idols, setIdols] = useState([]);

	// 처음에 한 번 idols 불러오기
	useEffect(() => {
		const fetchData = async () => {
			const result = await idolsAPI.getIdols(16); // 불러올 개수
			const idollist = result.list; // api에서 list만 가져오기
			setIdols(idollist);
		};
		fetchData();
	}, []);

	return (
		<>
			{idols.map((idol) => (
				<div css={idolList} key={idol.id}>
					<div css={idolFace}>
						<img src={idol.profilePicture} alt={idol.name} />
					</div>
					<h3>{idol.name}</h3>
					<h4>{idol.group}</h4>
				</div>
			))}
		</>
	);
};

export default IdolList;
