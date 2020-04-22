import styled from "styled-components";
export const StyledSection = styled.section`
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colorPrimary};
  position: relative;
  overflow: hidden;
  ${({ theme }) => theme.mq.desktop} {
    ${({ notFullHeight }) =>
      notFullHeight &&
      `
      height: 70vh;
    
    `}
  }
`;
