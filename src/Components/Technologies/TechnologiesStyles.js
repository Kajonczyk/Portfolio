import styled from "styled-components";
import { ReactLogo } from "@styled-icons/boxicons-logos/ReactLogo";
import { Redux } from "@styled-icons/boxicons-logos/Redux";
import { Html5 } from "@styled-icons/boxicons-logos/Html5";
import { Css3 } from "@styled-icons/boxicons-logos/Css3";
import { Javascript } from "@styled-icons/boxicons-logos/Javascript";
import { StyledSection as Section } from "../../Shared/StyledSection";

const iconsProperties = ({ theme }) =>
  `
    width:90px;
    color: ${theme.colorSecondary};
  transition: transform .2s, color .6s;
    &:hover{
      transform: translateY(-5px);
      color: ${theme.lightenedPrimary}
    }

`;
export const StyledSection = styled(Section)`
  ${({ theme }) => theme.mq.tablet} {
    height: 200px;
  }
`;

export const IconsWrapper = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  ${({ theme }) => theme.mq.tablet} {
    flex-direction: row;
  }
  ${({ theme }) => theme.mq.desktop} {
    padding: 0px 100px;
    max-width: 1200px;
    margin: 0px auto;
  }
`;
export const ReactIcon = styled(ReactLogo)`
  ${iconsProperties};
`;
export const ReduxIcon = styled(Redux)`
  ${iconsProperties};
`;
export const HtmlIcon = styled(Html5)`
  ${iconsProperties};
`;
export const CssIcon = styled(Css3)`
  ${iconsProperties};
`;
export const JavascriptIcon = styled(Javascript)`
  ${iconsProperties};
`;
