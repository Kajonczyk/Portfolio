import React, { Component } from "react";
import { StyledButton } from "../../Shared/StyledButton";
import { Shape } from "../../Shared/Shape";
import {
  StyledH1,
  StyledH2,
  StyledHeader,
  StyledParagraph,
  StyledTextWrapper,
} from "./HeaderStyles";

export class Header extends Component {
  state = {
    posX: 0,
    posY: 0,
    windowWidth: 0,
  };
  componentDidMount() {
    this.setWidth();
    const section = this.sectionRef;
    window.addEventListener("resize", this.setWidth);
    section.addEventListener("mousemove", this.setNewPosition);
  }
  setWidth = () => {
    this.setState({
      windowWidth: window.innerWidth,
    });
  };
  setNewPosition = (e) => {
    if (this.state.windowWidth >= 1024) {
      const { clientX, clientY } = e;
      const ratioX = 0.012;
      const ratioY = 0.01;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      this.setState({
        posX: (clientX - centerX) * ratioX,
        posY: (clientY - centerY) * ratioY,
      });
    }
  };

  render() {
    const { posX, posY } = this.state;
    return (
      <>
        <StyledHeader ref={(e) => (this.sectionRef = e)}>
          <Shape width="110%" height="200%" top="15%" left="45%" />
          <Shape
            width="100%"
            height="100%"
            top="-30%"
            left="-10%"
            rotation="-120"
          />
          <Shape
            width="100%"
            height="100%"
            top="-100%"
            left="110%"
            rotation="60"
          />
          <StyledTextWrapper offsetX={posX} offsetY={posY}>
            <StyledH1>Kamil Kopczacki</StyledH1>
            <StyledH2>Front-end Developer</StyledH2>
            <StyledParagraph>
              I’m a web development enthusiast who is passionate about building
              modern, performant websites
            </StyledParagraph>
            <StyledButton>Explore</StyledButton>
          </StyledTextWrapper>
        </StyledHeader>
      </>
    );
  }
}
