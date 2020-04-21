import styled from "styled-components";
import {
  hawksmandesktop,
  hawksmantablet,
  hawksmanmobile,
  youvidmobile,
  youvidtablet,
  youviddesktop,
} from "../../Images/index";
import { Github } from "@styled-icons/boxicons-logos/Github";
import { Eye } from "@styled-icons/fa-regular/Eye";

const backgroundMobile = (background) => {
  switch (background) {
    case "juniorStart": {
      return `url(${hawksmanmobile});`;
    }
    case "hawksman": {
      return `url(${hawksmanmobile});`;
    }
    case "videoApp": {
      return `url(${youvidmobile});`;
    }
    default: {
      return;
    }
  }
};
const backgroundMobileLarge = (background) => {
  switch (background) {
    case "juniorStart": {
      return `url(${hawksmanmobile});`;
    }
    case "hawksman": {
      return `url(${hawksmantablet});`;
    }
    case "videoApp": {
      return `url(${youvidtablet});`;
    }
    default: {
      return;
    }
  }
};
const backgroudTablet = (background) => {
  switch (background) {
    case "juniorStart": {
      return `url(${hawksmanmobile});`;
    }
    case "hawksman": {
      return `url(${hawksmandesktop});`;
    }
    case "videoApp": {
      return `url(${youviddesktop});`;
    }
    default: {
      return;
    }
  }
};

const iconProperties = () => `
  width:50px;
  color:black;
`;
export const GithubIcon = styled(Github)`
  ${iconProperties};
`;
export const EyeIcon = styled(Eye)`
  ${iconProperties};
`;
export const IconsWrapper = styled.div`
  display: none;
  ${({ active }) =>
    active &&
    `
  position: absolute;
  top: 90%;
  left: 50%;
  width: 150px;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-between;
  z-index:4;

`}
`;
export const StyledBackground = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 100vh;
  width: 100%;
  transform: translate(-50%, -50%);
  z-index: 2;
  opacity: 0.6;
  background-image: ${({ image }) => backgroundMobile(image.name)};
  transition: background-image 0.3s;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  ${({ theme }) => theme.mq.mobileXL} {
    background-image: ${({ image }) => backgroundMobileLarge(image.name)};
  }
  ${({ theme }) => theme.mq.tablet} {
    background-image: ${({ image }) => backgroudTablet(image.name)};
  }
`;

export const StyledItem = styled.h3`
  color: transparent;
  -webkit-text-stroke: 0.01px black;
  font-family: ${({ theme }) => theme.font.family.Didact};

  text-align: center;
  font-size: calc(${({ theme }) => theme.font.size.l} * 1.5);
  cursor: pointer;
  position: relative;
  z-index: 2;
  &:hover {
    opacity: 1 !important;
    color: white;
    -webkit-text-stroke: 0px;
  }
`;
export const StyledDot = styled.div`
  width: 13px;
  height: 13px;
  border-radius: 25px;
  margin: 0px auto;
  background-color: ${({ theme }) => theme.colorSecondary};
`;

export const StyledItemsWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  padding: 50px 0px;
  margin-top: -50px;
  position: relative;
  z-index: 2;
  &:hover ${StyledItem} {
    opacity: 0.4;
  }
`;
