import styled from "styled-components";
import { ReactLogo } from "@styled-icons/boxicons-logos/ReactLogo";
import { Redux } from "@styled-icons/boxicons-logos/Redux";
import { Html5 } from "@styled-icons/boxicons-logos/Html5";
import { Css3 } from "@styled-icons/boxicons-logos/Css3";
import { Javascript } from "@styled-icons/boxicons-logos/Javascript";

const iconsProperties = ({ theme }) =>
  `
    width:90px;
    color: ${theme.colorSecondary};

`;

export const IconsWrapper = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
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
