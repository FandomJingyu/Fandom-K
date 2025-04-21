import { idolFace, idolList } from "./IdolList.styles";
/** @jsxImportSource @emotion/react */

const IdolList = ({ idol }) => {
	if (!idol) return null; // idol이 없으면 아무 것도 렌더링하지 않음

	return (
		<>
			<div css={idolList} key={idol.id}>
				<div css={idolFace}>
					<img src={idol.profilePicture} alt={idol.name} />
				</div>
				<h3>{idol.name}</h3>
				<h4>{idol.group}</h4>
			</div>
		</>
	);
};

export default IdolList;
