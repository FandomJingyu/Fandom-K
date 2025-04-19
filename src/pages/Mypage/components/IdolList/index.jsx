import { IDOLS } from "../../../../mocks/idols";
import { idolFace, idolList } from "./IdolList.styles";
/** @jsxImportSource @emotion/react */

const IdolList = () => {
	return (
		<>
			{IDOLS.map((idol) => (
				<div css={idolList} key={idol.idol.id}>
					<div css={idolFace}>
						<img src={idol.idol.profilePicture} alt={idol.idol.name} />
					</div>
					<h3>{idol.idol.name}</h3>
					<h4>{idol.idol.group}</h4>
				</div>
			))}
		</>
	);
};

export default IdolList;
