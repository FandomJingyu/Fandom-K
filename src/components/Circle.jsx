import styled from "@emotion/styled";
import PropTypes from "prop-types";
import React from "react";

export const ImageCircle = styled.div`
  display: flex;
  width: ${(props) => props.size || "128px"};
  height: ${(props) => props.size || "128px"};
  border-radius: 50%;
  border: 1.31px solid #f96868;
  align-items: center;
  justify-content: center;
`;

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
