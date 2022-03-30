import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, MainHeading } from "../../globalStyles";
import {
  HeroVideo,
  HeroSection,
  HeroText,
  ButtonWrapper,
  HeroButton,
} from "./HeroStyles";

const hero = () => {
  return (
    <div>
      <HeroSection>
        <HeroVideo src="./assets/hero.mp4" autoPlay muted ></HeroVideo>
        <Container>
          <MainHeading>your data is secure with us</MainHeading>
          <HeroText>
            We Provide the best security system for clients all ove the world
          </HeroText>
          <ButtonWrapper>
            <Link to ="signup">
              <Button>Get Started</Button>
            </Link>
            <HeroButton>Find More</HeroButton>
          </ButtonWrapper>
        </Container>
      </HeroSection>
    </div>
  );
};

export default hero;
