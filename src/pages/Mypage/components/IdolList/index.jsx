import Circle from "../../../../components/Circle";
import { idolList } from "./IdolList.styles";
/** @jsxImportSource @emotion/react */

const IdolList = ({ idol, size = "128px" }) => {
	if (!idol) return null; // idol이 없으면 아무 것도 렌더링하지 않음

	return (
		<>
			<div css={idolList} key={idol.id}>
				<Circle
					size={size}
					imageUrl={idol.profilePicture}
					alt={idol.name}
					decoding="async"
				/>
				<h3>{idol.name}</h3>
				<h4>{idol.group}</h4>
			</div>
		</>
	);
};

export default IdolList;
