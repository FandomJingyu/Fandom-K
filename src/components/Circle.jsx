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
  object-position: center;
  padding: 3px;
  position: relative;
  box-sizing: content-box;
  
`;
// 원하는 사이즈가 있으면 <Circle size=""/> 없을 시 기본 128px
// 아이돌 이미지가 Circle frame보다 더 작게하기 위해 *0.9
const IdolImage = styled.img`
  object-fit: cover;
  object-position: top;
  width: calc(${(props) => props.size || "128px"} );
  height: calc(${(props) => props.size || "128px"} );
  border-radius: 50%;
  cursor:pointer;
  margin:0 auto;
   
`;

const Circle = ({ imageUrl, alt, size, children, ...props }) => {
	return (
		<ImageCircle size={size}>
			<IdolImage
				src={imageUrl}
				alt={alt}
				size={size}
				loading="eager"
				{...props}
			/>
			{children}
		</ImageCircle>
	);
};

Circle.propTypes = {
	imageUrl: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	size: PropTypes.string,
};

export default Circle;
