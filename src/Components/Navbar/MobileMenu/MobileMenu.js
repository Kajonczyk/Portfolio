import React, { useState } from "react";
import {
  HamburgerWrapper,
  StyledLine,
  StyledWrapper,
  StyledList,
  StyledListItem,
} from "./Styles/MobileMenuStyles";
import { Shape } from "../../../Shared/Shape";
export const MobileMenu = () => {
  const [isToggled, setToggle] = useState(true);
  return (
    <>
      <HamburgerWrapper onClick={() => setToggle(!isToggled)}>
        <StyledLine width="32" isToggled={isToggled} />
        <StyledLine width="27" isToggled={isToggled} />
        <StyledLine width="32" isToggled={isToggled} />
      </HamburgerWrapper>
      {isToggled && (
        <StyledWrapper>
          <Shape
            width="100%"
            height="100%"
            top="22%"
            left="29%"
            scale="1.5"
            translateY="0%"
          />
          <StyledList>
            <StyledListItem>Home</StyledListItem>
            <StyledListItem>Projects</StyledListItem>
            <StyledListItem>Stack</StyledListItem>
            <StyledListItem>Contact</StyledListItem>
          </StyledList>
        </StyledWrapper>
      )}
    </>
  );
};
