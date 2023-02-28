import Button from "@/components/Button";
import { styled } from "@mui/material";
import Image from "next/image";
import React from "react";
import elephant from "../../../../public/images/craft-elephant.png";

interface indexProps {}

export const Crafts: React.FC<indexProps> = ({}) => {
  return (
    <CraftWrapper>
      <SectionImage>
        <Image src={elephant} alt="We craft growth-driven experience" />
      </SectionImage>
      <SectionContent>
        <SectionTitle>We craft growth-driven experience</SectionTitle>
        <SectionDescription>
          Follow us on Instagram to get tips to help you grow your products
          learn more about our design process
        </SectionDescription>
        <div style={{ display: "flex", gap: "2rem" }}>
          <Button text="Go bespoke!" background="#0A0A0A" borderRadius="28px" />
          <Button
            text="Contact us"
            background="#FFFFFF"
            color="#0A0A0A"
            borderRadius="28px"
          />
        </div>
        <SubTitleText>Avg response time: 10mins</SubTitleText>
      </SectionContent>
    </CraftWrapper>
  );
};

const CraftWrapper = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "9rem",
  //   width: "70%",
  margin: "10rem auto",
  // marginTop: "15rem",
}));
const SectionImage = styled("div")(() => ({
  "& img": {
    width: "370px",
    height: "280px",
  },
}));

const SectionContent = styled("div")(() => ({
  width: "50%",
}));
const SectionTitle = styled("div")(() => ({
  fontFamily: "'Avenir' sans-serif",
  fontWeight: 900,
  fontSize: "4.5rem",
}));
const SectionDescription = styled("div")(() => ({
  margin: "4rem 0",
  fontFamily: "'Avenir' sans-serif",
  fontWeight: 400,
  color: "#505050",
  fontSize: "1.8rem",
  maxWidth: "70%",
}));
const SubTitleText = styled("h4")(() => ({
  fontSize: "1.6rem",
  textAlign: "left",
  width: "100%",
  marginTop: "1rem",
}));
export default Crafts;
