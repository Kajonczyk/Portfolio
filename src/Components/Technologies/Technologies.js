import React from "react";
import { StyledSection } from "../../Shared/StyledSection";
import { StyledHeading } from "../../Shared/SectionHeading";
import {
  ReactIcon,
  ReduxIcon,
  HtmlIcon,
  CssIcon,
  JavascriptIcon,
  IconsWrapper,
} from "./TechnologiesStyles";

export const Technologies = () => {
  return (
    <StyledSection>
      <StyledHeading>Technologies</StyledHeading>
      <IconsWrapper>
        <ReactIcon />
        <ReduxIcon />
        <HtmlIcon />
        <CssIcon />
        <JavascriptIcon />
      </IconsWrapper>
    </StyledSection>
  );
};
