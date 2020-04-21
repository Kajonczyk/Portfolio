import React from "react";
import { StyledHeading } from "../../Shared/SectionHeading";
import {
  ReactIcon,
  ReduxIcon,
  HtmlIcon,
  CssIcon,
  JavascriptIcon,
  IconsWrapper,
  StyledSection,
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
