import { css } from "@emotion/react";
import CheckIdol from "../../../../components/CheckIdol";
import Circle from "../../../../components/Circle";
import { idolList } from "./IdolList.styles";
/** @jsxImportSource @emotion/react */

//imageWrapper 로 감싸면 CheckIdol 사용 가능
const imageWrapper = (size) => css`
	position: relative;
	width: ${size};
	height: ${size};
	margin: 0 auto;
`;

const IdolList = ({ idol, size = "128px", isChecked = false }) => {
	if (!idol) return null; // idol이 없으면 아무 것도 렌더링하지 않음

	return (
		<>
			<div css={idolList} key={idol.id}>
				<div css={imageWrapper(size)}>
					<Circle
						size={size}
						imageUrl={idol.profilePicture}
						alt={idol.name}
						decoding="async"
					/>
					<CheckIdol
						isChecked={isChecked}
						size={Number.parseInt(size)}
						checkSize={"52"}
					/>
				</div>
				<h3>{idol.name}</h3>
				<h4>{idol.group}</h4>
			</div>
		</>
	);
};

export default IdolList;
