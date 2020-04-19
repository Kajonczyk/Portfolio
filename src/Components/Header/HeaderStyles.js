import styled from "styled-components";

const paragraphStyles = ({ theme }) =>
  `font-family: ${theme.font.family.Didact};
  color:transparent;
  -webkit-text-stroke: 0.01px black;
  position:relative;
  z-index:2;
  `;

export const StyledHeader = styled.header`
  margin: 0px auto;
  text-align: center;
  overflow: hidden;
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colorPrimary};
`;
export const StyledH1 = styled.h1`
  ${paragraphStyles};
  font-size: ${({ theme }) => theme.font.size.l};
`;
export const StyledH2 = styled.h2`
  ${paragraphStyles};
`;
export const StyledParagraph = styled.p`
  position: relative;
  z-index: 2;
  margin-top: 50px;
  font-family: ${({ theme }) => theme.font.family.Lato};
  font-size: ${({ theme }) => theme.font.size.xs};
`;
export const StyledTextWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(
    calc(-50% - ${({ offsetX }) => offsetX}px),
    calc(-50% - ${({ offsetY }) => offsetY}px)
  );
  width: 100%;
  overflow: hidden;
`;
