import { styled } from "@mui/material";
import Image from "next/image";
import React from "react";
import heroIllustration from "../../../../public/images/hero-illustration.svg";
import heroJumbo from "../../../../public/images/hero-jumbo-text.svg";
import richocoSmBlack from "../../../../public/images/logo-sm-black.svg";
import Button from "../../Button";
interface indexProps {}

export const HomePageHero: React.FC<indexProps> = ({}) => {
  return (
    <HomeWrapper>
      <HeroTextWrapper>
        <LogoWrapper>
          <Image alt="Richoco" src={richocoSmBlack} />
        </LogoWrapper>
        <HeroText>
          <Image alt="Brin in the idea" src={heroJumbo} />
        </HeroText>
        <HeroSubText>
          User experience is everything. It always has been. Dream big on your
          idea leave the brain work to us. we believe in product led growth!.
        </HeroSubText>
        <HeroCTA>
          <Button text="Go bespoke!" background="#0A0A0A" borderRadius="28px" />
          <Button
            text="Contact us"
            background="#FFFFFF"
            color="#0A0A0A"
            borderRadius="28px"
          />
        </HeroCTA>
        <SubTitleText>Avg response time: 10mins</SubTitleText>
      </HeroTextWrapper>
      <HeroIllustrationWrapper>
        <HeroIllustration>
          <Image alt="illustration" src={heroIllustration} />
        </HeroIllustration>
      </HeroIllustrationWrapper>
    </HomeWrapper>
  );
};

const HomeWrapper = styled("div")(() => ({
  display: "flex",
  // marginBottom: "18rem",
}));

const HeroTextWrapper = styled("div")(() => ({
  width: "50%",
  justifySelf: "center",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  padding: "3rem 12rem",
  fontFamily: "'Avenir' sans-serif",
}));

const LogoWrapper = styled("div")(() => ({
  alignSelf: "flex-start",
}));
const HeroText = styled("div")(() => ({
  marginTop: "9rem",
  "& img": {
    width: "91%",
    // height: "100%",
  },
}));

const HeroIllustrationWrapper = styled("div")(() => ({
  width: "50%",
  background: "#C4DBEC",
  borderRadius: "0px 0px 0px 100px",
}));
const HeroIllustration = styled("div")(() => ({
  background: "#C4DBEC",
  padding: "5rem",
  borderRadius: "0px 0px 0px 100px",
  "& img": {
    width: "100%",
  },
}));

const HeroSubText = styled("p")(() => ({
  // width: "85%",
  textAlign: "left",
  fontSize: "2rem",
  marginTop: "-2rem",
  color: "#505050",
}));
const HeroCTA = styled("div")(() => ({
  display: "flex",
  //   justifyContent: "space-between",
  gap: "3rem",
  width: "100%",
  marginTop: "4rem",
}));

const SubTitleText = styled("h4")(() => ({
  fontSize: "1.6rem",
  textAlign: "left",
  width: "100%",
  marginTop: "1rem",
}));

export default HomePageHero;
