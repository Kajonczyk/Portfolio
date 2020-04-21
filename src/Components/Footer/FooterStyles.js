import styled from "styled-components";
import { Envelope } from "@styled-icons/evil/Envelope";
const absoluteStyles = () => `
position:absolute;
top:50%:
transform:translate(-50%,-50%);
`;

export const EnvelopeIcon = styled(Envelope)`
  width: 20px;
`;
export const StyledFooter = styled.footer`
  height: 100px;
  width: 100%;
  background-color: ${({ theme }) => theme.colorSecondary};
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  ${({ theme }) => theme.mq.tablet} {
    height: 130px;
  }
`;
export const StyledParagraph = styled.p`
  color: black;
  font-family: ${({ theme }) => theme.font.family.Didact};
  font-size: ${({ theme }) => theme.font.size.xs};
  position: relative;
  z-index: 2;
  ${absoluteStyles};
  top: 55%;
  text-align: center;
`;

export const StyledSVGWrapper = styled.div`
  width: 100%;
  ${absoluteStyles};
`;
