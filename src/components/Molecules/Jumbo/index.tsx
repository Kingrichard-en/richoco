import Flex from "@/components/Flex";
import { styled } from "@mui/material";
import Image from "next/image";
import React from "react";
import heroIllustrationMb from "../../../assets/images/hero-illustration-mb.svg";
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
            <Image
              alt="Richoco"
              src={richocoSmBlack}
              style={{ cursor: "pointer" }}
            />
          </LogoWrapper>
        )}
        <HeroText data-aos="fade-down">
          <Image
            alt="Brin in the idea"
            src={heroJumbo}
            style={{
              margin: isMobile ? "-10rem 1rem -8rem 1rem" : "0",
            }}
          />
        </HeroText>
        <div data-aos="fade-up">
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
              // aos={{ "data-aos": "fade-right" }}
              // data-aos-delay="500"
              onSubmit={() =>
                window.open(
                  "https://web.whatsapp.com/send?phone=2348060771255&text=Richoco%20Studio%3A%20Tell%20us%20your%20bespoke%20idea%21",
                  "_blank"
                )
              }
            />
            <Button
              text="Contact us"
              background="#FFFFFF"
              color="#0A0A0A"
              borderRadius="28px"
              fontSize={isMobile ? "1.6rem" : "2rem"}
              width={isMobile ? "16rem" : "245px"}
              height={isMobile ? "4.8rem" : "56px"}
              // aos={{ "data-aos": "fade-left" }}
              onSubmit={() =>
                window.open(
                  "https://us10.list-manage.com/contact-form?u=72b160a86172e5fd4e66a28c5&form_id=1980ff014ed6ea7ec3dffbe211a3f143",
                  "_blank"
                )
              }
            />
          </HeroCTA>
        </div>
        <SubTitleText
          style={{
            fontSize: "1.4rem",
            width: isMobile ? "90%" : "100%",
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
          }}
        >
          <Image
            data-aos="zoom-in-up"
            alt="illustration"
            src={isMobile ? heroIllustrationMb : heroIllustration}
            style={{
              width: isMobile ? "363px" : "72%",
              height: isMobile ? "447px" : "auto",
              margin: "0 auto",
              padding: isMobile ? "3rem" : "initial",
            }}
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
  cursor: "pointer",
}));
const HeroText = styled("div")(() => ({
  marginTop: "4rem",
  "& img": {
    width: "91%",
  },
}));

const HeroIllustrationWrapper = styled("div")(() => ({
  background: "#C4DBEC",
}));
const HeroIllustration = styled("div")(() => ({
  background: "#C4DBEC",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto",
  height: "102%",
  width: "100%",
}));

const HeroSubText = styled("p")(() => ({
  lineHeight: "2.3rem",
  textAlign: "left",
  marginTop: "-5rem",
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
