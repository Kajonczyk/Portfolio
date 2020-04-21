import styled from "styled-components";

export const StyledContent = styled.div`
  ${({ theme }) => theme.mq.desktop} {
    max-width: 1200px;
    margin: 0px auto;
  }
`;
