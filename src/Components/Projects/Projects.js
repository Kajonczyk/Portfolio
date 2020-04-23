import React, { useState } from "react";
import { StyledHeading } from "../../Shared/SectionHeading";
import { StyledSection } from "../../Shared/StyledSection";
import { StyledContent } from "../../Shared/StyledContent";

import {
  StyledItem,
  StyledItemsWrapper,
  StyledDot,
  StyledBackground,
  GithubIcon,
  EyeIcon,
  IconsWrapper,
} from "./ProjectsStyles";

export const Projects = () => {
  const [image, setImage] = useState({ name: "", liveURL: "", githubUrl: "" });
  return (
    <StyledSection notFullHeight>
      <StyledContent>
        <StyledHeading>Projects</StyledHeading>
      </StyledContent>
      <StyledBackground image={image} />
      <IconsWrapper active={!!image.name}>
        <a href={image.githubURL} target="_blank" rel="noopener noreferrer">
          <GithubIcon />
        </a>
        <a href={image.liveURL} target="_blank" rel="noopener noreferrer">
          <EyeIcon />
        </a>
      </IconsWrapper>

      <StyledItemsWrapper>
        <StyledDot />
        <StyledItem
          name="juniorStart"
          onMouseOver={() =>
            setImage((i) => ({
              name: "juniorStart",
              liveURL: "https://github.com/juniorstart/front-react",
              githubURL: "https://github.com/juniorstart/front-react",
            }))
          }
        >
          JuniorStart
        </StyledItem>
        <StyledDot />
        <StyledItem
          name="hawksman"
          onMouseOver={() =>
            setImage((i) => ({
              name: "hawksman",
              liveURL: "https://kajonczyk.github.io/Hawksman/",
              githubURL: "https://github.com/Kajonczyk/Hawksman",
            }))
          }
        >
          Hawksman
        </StyledItem>
        <StyledDot />
        <StyledItem
          name="videoApp"
          onMouseOver={() =>
            setImage((i) => ({
              name: "videoApp",
              liveURL: "https://kajonczyk.github.io/VideoApp/",
              githubURL: "https://github.com/Kajonczyk/VideoApp",
            }))
          }
        >
          VideoApp
        </StyledItem>
        <StyledDot />
      </StyledItemsWrapper>
    </StyledSection>
  );
};
