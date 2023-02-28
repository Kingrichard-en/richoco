import Button from "@/components/Button";
import { styled } from "@mui/material";
import Image from "next/image";
import React from "react";
import elephant from "../../../../public/images/deliver-elephant.svg";
interface indexProps {}

export const HowWeDeliver: React.FC<indexProps> = ({}) => {
  return (
    <HowWeDeliverWrapper>
      <SectionImage>
        <Image src={elephant} alt="how we deliver" />
      </SectionImage>
      <SectionContent>
        <SectionTitle>How we deliver</SectionTitle>
        <SectionDescription>
          We design and develop captivating Brand Identities and influential
          Digital Products for innovative companies around the world. Using the
          industry-proven Standards and Design Sprint, with our reliant remote
          team, we've developed a highly optimized design delivery process that
          brings results in just a few weeks. Sounds like what you’re looking
          for?
        </SectionDescription>
        <Button
          text="Contact us"
          background="#FFFFFF"
          color="#0A0A0A"
          borderRadius="28px"
        />
        <SubTitleText>Avg response time: 10mins</SubTitleText>
      </SectionContent>
    </HowWeDeliverWrapper>
  );
};

const HowWeDeliverWrapper = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "70%",
  margin: "0 auto",
  marginTop: '4rem'
}));
const SectionImage = styled("div")(() => ({
  "& img": {
    width: "70%",
  },
}));

const SectionContent = styled("div")(() => ({
  width: "50%",
}));
const SectionTitle = styled("div")(() => ({
  fontFamily: "'Avenir' sans-serif",
  fontWeight: 700,
  fontSize: "6.5rem",
}));
const SectionDescription = styled("div")(() => ({
  margin: "4rem 0",
  fontFamily: "'Avenir' sans-serif",
  fontWeight: 400,
  color: "#505050",
  fontSize: "1.8rem",
}));
const SubTitleText = styled("h4")(() => ({
  fontSize: "1.6rem",
  textAlign: "left",
  width: "100%",
  marginTop: "1rem",
}));
export default HowWeDeliver;
