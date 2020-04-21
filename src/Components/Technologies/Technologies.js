import React, { useRef } from "react";
import { StyledHeading } from "../../Shared/SectionHeading";
import { StyledContent } from "../../Shared/StyledContent";
import { useIntersection } from "react-use";
import { gsap } from "gsap";
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
  const sectionRef = useRef(null);
  const show = (elements) => {
    const tl = gsap.timeline();
    tl.fromTo(
      elements,
      { opacity: 0 },
      { opacity: 1, duration: 1, stagger: 0.2 }
    );
  };
  const hide = (elements) => {
    const tl = gsap.timeline();
    tl.fromTo(
      elements,
      { opacity: 1 },
      { opacity: 0, duration: 0.2, stagger: 0 }
    );
  };

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });
  intersection && intersection.intersectionRatio > 0.5
    ? show(".fadeIn")
    : hide(".fadeIn");
  return (
    <StyledSection ref={sectionRef}>
      <StyledContent>
        <StyledHeading>Technologies</StyledHeading>
        {show()}
      </StyledContent>

      <IconsWrapper>
        <ReactIcon className="fadeIn" />
        <ReduxIcon className="fadeIn" />
        <HtmlIcon className="fadeIn" />
        <CssIcon className="fadeIn" />
        <JavascriptIcon className="fadeIn" />
      </IconsWrapper>
    </StyledSection>
  );
};
