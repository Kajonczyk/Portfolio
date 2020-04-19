import styled from "styled-components";
// Pre Toggle
export const HamburgerWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: fixed;
  left: 85%;
  top: 2%;
  z-index: 3;
  cursor: pointer;
  flex-direction: column;
  padding: 3px;
`;
export const StyledLine = styled.div`
  width: ${({ width }) => `${width}px`};
  height: 2px;
  background-color: black;
  margin: 4px 0px;
  transition: transform 0.2s, opacity 0.1s;
  position: relative;
  ${({ isToggled }) =>
    isToggled &&
    `
    &:nth-child(1){   
    transform: rotate(45deg) translate(6px,10px);
    }
    &:nth-child(2){
        opacity:0;
    }
    &:nth-child(3){
        transform: rotate(-45deg) translate(4px, -8px);

    }
  `}
`;
// Toggled Menu

export const StyledWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100%;

  z-index: 2;
  background-color: ${({ theme }) => theme.colorPrimary};
`;
export const StyledList = styled.ul`
  padding-left: 20px;
  list-style: none;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 4;
  height: 90%;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  flex-direction: column;
`;
export const StyledListItem = styled.li`
  color: transparent;
  -webkit-text-stroke: 0.8px black;
  font-family: ${({ theme }) => theme.font.family.Didact};
  font-size: ${({ theme }) => theme.font.size.mobileMenuItem};
  transition: transform 0.3s, color 0.2s;
  text-align: left;
  cursor: pointer;

  &:hover {
    transform: translateX(15px);
    color: ${({ theme }) => theme.colorPrimary};
  }

  &:before {
    content: "";
    position: absolute;
    z-index: 1;
    display: block;

    height: 100%;
    transform: translate(-50%, 44px);
    width: 20px;
    height: 1px;
    background-color: grey;
  }
`;
