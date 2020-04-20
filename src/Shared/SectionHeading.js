import styled from "styled-components";

export const StyledHeading = styled.h2`
  color: transparent;
  -webkit-text-stroke: 0.01px black;
  font-family: ${({ theme }) => theme.font.family.Lato};
  font-size: calc(${({ theme }) => theme.font.size.l} * 1.2);
`;
