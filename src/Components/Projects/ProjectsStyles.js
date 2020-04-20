import styled from "styled-components";

export const StyledItemsWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  padding: 50px 0px;
  margin-top: -50px;
`;
export const StyledItem = styled.h3`
  color: transparent;
  -webkit-text-stroke: 0.01px black;
  font-family: ${({ theme }) => theme.font.family.Lato};
  width: 100%;
  text-align: center;
  font-size: calc(${({ theme }) => theme.font.size.l} * 1.5);
`;
export const StyledDot = styled.div`
  width: 13px;
  height: 13px;
  border-radius: 25px;
  margin: 0px auto;
  background-color: ${({ theme }) => theme.colorSecondary};
`;
export const StyledParagraph = styled.p`
  text-align: center;
  font-style: italic;
  font-family: ${({ theme }) => theme.font.family.Lato};
  font-size: ${({ theme }) => theme.font.size.xs};
`;
