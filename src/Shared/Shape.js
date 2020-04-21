import React from "react";
import styled from "styled-components";
import ShapeSVG from "./Shape.svg";

export const Shape = ({
  top,
  left,
  scale = 1,
  rotate = 0,
  position = "relative",
  headerTop,
  headerLeft,
}) => (
  <ShapeWrapper
    top={top}
    left={left}
    scale={scale}
    rotate={rotate}
    position={position}
    headerTop={headerTop}
    headerLeft={headerLeft}
  />
);

const ShapeWrapper = styled.div`
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  transform: translate(-50%,-50%) scale(${({ scale }) => scale}) rotate(${({
  rotate,
}) => rotate}deg);
  height: 300px;
  width: 300px;
  background-image: url('${ShapeSVG}');
  background-size: cover;
  background-repeat: no-repeat;
  transition: transform 0.2s;
  ${({ theme }) => theme.mq.mobileM} {
    ${({ headerTop, scale, rotate }) =>
      headerTop &&
      `
      transform: translate(-50%,-50%) scale(${
        scale * 1.2
      }) rotate(${rotate}deg);
    `}
  }
  ${({ theme }) => theme.mq.tablet} {
    ${({ headerTop, scale, rotate }) =>
      headerTop &&
      `
      top: 55%;
      left:54%;
    `}
    ${({ headerLeft }) =>
      headerLeft &&
      `
    display:none;`}
  }

`;
