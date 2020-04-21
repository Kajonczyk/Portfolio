import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
export const EntryAnimation = () => {
  const sectionRef = useRef();

  useEffect(() => {
    const section = sectionRef.current;
    const sectionChildren = [...sectionRef.current.children];
    const tl = gsap.timeline();

    tl.to(sectionChildren, {
      left: "-200%",
      duration: 2.6,
      stagger: "0.1",
      ease: "power2.out",
    }).to(section, { display: "none" }, "-=1.5");
  }, []);

  return (
    <StyledWrapper ref={sectionRef}>
      <StyledDiv />
      <StyledDiv grey />
    </StyledWrapper>
  );
};

export const StyledWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 130%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
`;
export const StyledDiv = styled.div`
  background-color: ${({ theme }) => theme.colorPrimary};
  height: 100vh;
  width: 250vw;
  left: 0vw;
  position: absolute;
  ${({ grey, theme }) =>
    grey &&
    `
    left: 250vw;
    width:200vw;
    background-color: ${theme.colorSecondary};
    `}
`;
