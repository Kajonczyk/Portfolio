import React, { Component } from "react";
import { StyledButton } from "../../Shared/StyledButton";
import { Shape } from "../../Shared/Shape";
import { EntryAnimation } from "./EntryAnimation";
import {
  StyledH1,
  StyledH2,
  StyledHeader,
  StyledParagraph,
  StyledTextWrapper,
  GithubIcon,
} from "./HeaderStyles";

const ShapeElement = React.memo(() => (
  <Shape top="10%" left="50%" scale="2" headerTop />
));

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
  scrollToSection = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  render() {
    const { posX, posY } = this.state;
    return (
      <>
        <StyledHeader ref={(e) => (this.sectionRef = e)}>
          <ShapeElement />
          <Shape
            top="70%"
            left="-60px"
            scale="0.8"
            rotate="-140"
            position="absolute"
            headerLeft
          />
          <StyledTextWrapper offsetX={posX} offsetY={posY}>
            <StyledH1>Kamil Kopczacki</StyledH1>
            <StyledH2>Front-end Developer</StyledH2>
            <StyledParagraph>
              I’m a web development enthusiast who is passionate about building
              modern, performant websites
            </StyledParagraph>
            <StyledButton onClick={this.scrollToSection}>Explore</StyledButton>
          </StyledTextWrapper>
          <GithubIcon />
        </StyledHeader>
        <EntryAnimation />
      </>
    );
  }
}
