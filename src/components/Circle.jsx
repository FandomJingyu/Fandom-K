import styled from "@emotion/styled";
import React from "react";
import ProfileXIcon from "./ProfileXIcon";

const ImageCircle = styled.div`
  display: flex;
  width: 128px;
  height: 128px;
  border-radius: 50%;
  border: 1.31px solid #f96868;
  align-items: center;
  justify-content: center;
`;
const IdolImage = styled.img`
  width: 115px;
  height: 115px;
  border-radius: 50%;
`;

const Circle = () => {
	return (
		<div>
			<ProfileXIcon />
			<ImageCircle>
				{/* <IdolImage src="/images/Karina.jpeg" alt="aespa profile" /> */}
			</ImageCircle>
		</div>
	);
};

export default Circle;
