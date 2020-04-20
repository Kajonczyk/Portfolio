import React from "react";
import { Shape } from "../../Shared/Shape";
import { StyledHeading } from "../../Shared/SectionHeading";
import { StyledSection } from "../../Shared/StyledSection";
import {
  StyledItem,
  StyledParagraph,
  StyledItemsWrapper,
  StyledDot,
} from "./ProjectsStyles";
export const Projects = () => {
  return (
    <StyledSection>
      <StyledHeading>Projects</StyledHeading>
      <Shape
        width="100%"
        top="34%"
        left="-24%"
        rotation="-115"
        position="absolute"
      />
      <Shape
        width="100%"
        top="80%"
        left="185%"
        rotation="-70"
        position="absolute"
      />
      <StyledItemsWrapper>
        <StyledParagraph>Quality over quantity</StyledParagraph>
        <StyledDot />
        <StyledItem>JuniorStart</StyledItem>
        <StyledDot />
        <StyledItem>Hawksman</StyledItem>
        <StyledDot />
        <StyledItem>VideoApp</StyledItem>
        <StyledDot />
      </StyledItemsWrapper>
    </StyledSection>
  );
};
