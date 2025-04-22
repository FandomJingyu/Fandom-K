import styled from "@emotion/styled";
import PropTypes from "prop-types";
import React from "react";

// 원하는 사이즈가 있으면 <Circle size=""/> 없을 시 기본 128px
export const ImageCircle = styled.div`
  display: flex;
  width: ${(props) => props.size || "128px"};  
  height: ${(props) => props.size || "128px"};
  border-radius: 50%;
  border: 1.31px solid #f96868;
  align-items: center;
   object-position:center;
`;
// 원하는 사이즈가 있으면 <Circle size=""/> 없을 시 기본 128px
// 아이돌 이미지가 Circle frame보다 더 작게하기 위해 *0.9
const IdolImage = styled.img`
  object-fit: cover;
  width: calc(${(props) => props.size || "128px"} * 0.9);
  height: calc(${(props) => props.size || "128px"} * 0.9);
  border-radius: 50%;
  cursor:pointer;
 
  
`;

const Circle = ({ imageUrl, alt, size, ...props }) => {
	return (
		<ImageCircle size={size}>
			<IdolImage
				src={imageUrl}
				alt={alt}
				size={size}
				loading="eager"
				{...props}
			/>
		</ImageCircle>
	);
};

Circle.propTypes = {
	imageUrl: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	size: PropTypes.string,
};

export default Circle;
