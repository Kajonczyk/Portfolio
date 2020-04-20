import React from "react";
import {
  StyledFooter,
  StyledParagraph,
  StyledSVGWrapper,
  EnvelopeIcon,
} from "./FooterStyles";
export const Footer = () => {
  return (
    <StyledFooter>
      <StyledSVGWrapper
        style={{
          width: "150%",
          height: "100%",
        }}
      >
        <svg
          width="1440"
          height="44"
          viewBox="0 0 1440 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            width: "100%",
            height: "auto",
          }}
        >
          <path
            d="M0 36L80 32.0062C160 27.9375 320 20.0625 480 23.0062C640 26.0625 800 39.9375 960 42.9938C1120 45.9375 1280 38.0625 1360 33.9938L1440 30V0H1360C1280 0 1120 0 960 0C800 0 640 0 480 0C320 0 160 0 80 0H0V36Z"
            fill="#5E9C8D"
          />
        </svg>
      </StyledSVGWrapper>
      <StyledParagraph>
        Made with
        <span role="img" aria-label="emoji">
          ❤️
        </span>
        by Kamil Kopczacki
        <br />
        <EnvelopeIcon /> kopczackikamil2000@gmail.com
      </StyledParagraph>
    </StyledFooter>
  );
};
