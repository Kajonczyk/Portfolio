import styled from "styled-components";

export const StyledButton = styled.button`
  border-radius: 25px;
  background-color: ${({ theme }) => theme.colorSecondary};
  color: ${({ theme }) => theme.colorPrimary};
  margin-top: 40px;
  height: 40px;
  width: 90px;
  border: 0px;
  font-family: ${({ theme }) => theme.font.family.Lato};
  font-size: ${({ theme }) => theme.font.size.xs};
  font-weight: bold;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: box-shadow 0.3s;
  margin-bottom: 2px;
  &:hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);
    cursor: pointer;
  }
  ${({ theme }) => theme.mq.tablet} {
    height: 45px;
    width: 100px;
  }
`;
