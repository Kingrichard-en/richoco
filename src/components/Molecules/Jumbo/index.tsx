import Flex from "@/components/Flex";
import { styled } from "@mui/material";
import Image from "next/image";
import React from "react";
import heroIllustration from "../../../assets/images/hero-illustration.svg";
import heroJumbo from "../../../assets/images/hero-jumbo-text.svg";
import richocoSmBlack from "../../../assets/images/logo-sm-black.svg";
import Button from "../../Button";

interface indexProps {
  isMobile: boolean;
}

export const HomePageHero: React.FC<indexProps> = ({ isMobile }) => {
  return (
    <Flex direction={isMobile ? "column" : "row"}>
      <HeroTextWrapper
        style={{
          width: isMobile ? "100%" : "50%",
          padding: isMobile ? "1rem" : "3rem 12rem",
        }}
      >
        {!isMobile && (
          <LogoWrapper>
            <Image alt="Richoco" src={richocoSmBlack} />
          </LogoWrapper>
        )}
        <HeroText>
          <Image
            alt="Brin in the idea"
            src={heroJumbo}
            style={{
              // width: isMobile ? "110%" : "80%",
              // height: isMobile ? "100%" : "80%",
              margin: isMobile ? "-18rem 1rem -8rem 1rem" : "0",
            }}
          />
        </HeroText>
        <HeroSubText
          style={{
            width: isMobile ? "90%" : "auto",
            fontSize: isMobile ? "1.6rem" : "2rem",
          }}
        >
          User experience is everything. It always has been. Dream big on your
          idea leave the brain work to us. we believe in product led growth!.
        </HeroSubText>
        <HeroCTA
          style={{
            width: isMobile ? "90%" : "100%",
          }}
        >
          <Button
            text="Go bespoke!"
            background="#0A0A0A"
            borderRadius="28px"
            fontSize={isMobile ? "1.6rem" : "2rem"}
            width={isMobile ? "16rem" : "245px"}
            height={isMobile ? "4.8rem" : "56px"}
          />
          <Button
            text="Contact us"
            background="#FFFFFF"
            color="#0A0A0A"
            borderRadius="28px"
            fontSize={isMobile ? "1.6rem" : "2rem"}
            width={isMobile ? "16rem" : "245px"}
            height={isMobile ? "4.8rem" : "56px"}
          />
        </HeroCTA>
        <SubTitleText
          style={{
            fontSize: isMobile ? "1.4rem" : "1.6rem",
            width: isMobile ? "90%" : "auto",
          }}
        >
          Avg response time: 10mins
        </SubTitleText>
      </HeroTextWrapper>
      <HeroIllustrationWrapper
        style={{
          width: isMobile ? "100%" : "50%",
          borderRadius: isMobile ? 0 : "0px 0px 0px 100px",
          marginTop: isMobile ? "5rem" : "0",
        }}
      >
        <HeroIllustration
          style={{
            borderRadius: isMobile ? 0 : "0px 0px 0px 100px",
            padding: isMobile ? 9 : "5rem",
          }}
        >
          <Image
            alt="illustration"
            src={heroIllustration}
            style={{ width: isMobile ? "353px" : "100%", height: "447px" }}
          />
        </HeroIllustration>
      </HeroIllustrationWrapper>
    </Flex>
  );
};

// const HomeWrapper = styled("div")(() => ({
//   display: "flex",
//   // marginBottom: "18rem",
// }));

const HeroTextWrapper = styled("div")(() => ({
  justifySelf: "center",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",

  fontFamily: "'Avenir' sans-serif",
}));

const LogoWrapper = styled("div")(() => ({
  alignSelf: "flex-start",
}));
const HeroText = styled("div")(() => ({
  marginTop: "9rem",
  "& img": {
    width: "91%",
  },
}));

const HeroIllustrationWrapper = styled("div")(() => ({
  background: "#C4DBEC",
}));
const HeroIllustration = styled("div")(() => ({
  background: "#C4DBEC",
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

  marginTop: "4rem",
}));

const SubTitleText = styled("h4")(() => ({
  textAlign: "left",
  width: "100%",
  marginTop: "1rem",
}));

export default HomePageHero;
