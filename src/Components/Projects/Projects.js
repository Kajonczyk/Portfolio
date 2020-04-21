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
    <StyledSection>
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
          onMouseOver={() =>
            setImage((i) => ({
              name: "hawksman",
              liveURL: "",
              githubURL: "https://github.com/Kajonczyk/Hawksman",
            }))
          }
        >
          Hawksman
        </StyledItem>
        <StyledDot />
        <StyledItem
          onMouseOver={() =>
            setImage((i) => ({
              name: "videoApp",
              liveURL: "",
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
