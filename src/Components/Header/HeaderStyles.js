import styled, { keyframes } from "styled-components";
import { Github } from "@styled-icons/boxicons-logos/Github";
const paragraphStyles = ({ theme }) =>
  `font-family: ${theme.font.family.Didact};
  color:transparent;
  -webkit-text-stroke: 1px black;
  position:relative;
  z-index:2;
  ${theme.mq.tablet} {
    -webkit-text-stroke: 0.04px black;
  }
  `;

const show = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;
export const GithubIcon = styled(Github)`
  width: 40px;
  color: ${({ theme }) => theme.colorSecondary};
  position: absolute;
  top: 95%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: black;
`;

export const StyledHeader = styled.header`
  margin: 0px auto;
  text-align: center;
  overflow: hidden;
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colorPrimary};
  position: relative;
`;
export const StyledH1 = styled.h1`
  ${paragraphStyles};
  font-size: ${({ theme }) => theme.font.size.l};
  transition: font-size 0.2s;
  ${({ theme }) => theme.mq.mobileL} {
    font-size: calc(${({ theme }) => theme.font.size.l} + 0.5rem);
  }
  ${({ theme }) => theme.mq.tablet} {
    font-size: calc(${({ theme }) => theme.font.size.l} + 1rem);
  }
`;
export const StyledH2 = styled.h2`
  ${paragraphStyles};
  font-size: ${({ theme }) => theme.font.size.s};
  transition: font-size 0.2s;

  ${({ theme }) => theme.mq.tablet} {
    font-size: calc(${({ theme }) => theme.font.size.s} + 0.3rem);
  }
`;
export const StyledParagraph = styled.p`
  position: relative;
  z-index: 2;
  margin-top: 20px;
  font-family: ${({ theme }) => theme.font.family.Didact};
  font-size: ${({ theme }) => theme.font.size.xs};
  padding: 0px 20px;
  ${({ theme }) => theme.mq.mobileL} {
    padding: 0px 40px;
  }
  ${({ theme }) => theme.mq.tablet} {
    padding: 20px 100px;
    font-size: calc(${({ theme }) => theme.font.size.xs} + 0.2rem);
  }
`;
export const StyledTextWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(
    calc(-50% - ${({ offsetX }) => offsetX}px),
    calc(-50% - ${({ offsetY }) => offsetY}px)
  );
  cursor: pointer;
  width: 100%;
  overflow: hidden;
  animation: ${show} 0.5s linear;
  animation-delay: 0.7s;
`;
