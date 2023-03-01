import Button from "@/components/Button";
import Flex from "@/components/Flex";
import { styled } from "@mui/material";
import Image from "next/image";
import React from "react";
import richocoSmBlack from "../../../../public/images/logo-sm-black.svg";

interface StickyHeaderProps {
  sticky: boolean;
}

export const StickyHeader: React.FC<StickyHeaderProps> = ({ sticky }) => {
  if (!sticky) return null;
  return (
    <StickyHeaderWrapper>
      <Image src={richocoSmBlack} alt="logo" />
      <Flex align="center" gap="4rem">
        <p>Contact us</p>
        <Button text="Get a quote" color="#0A0A0A" borderRadius="28px" />
      </Flex>
    </StickyHeaderWrapper>
  );
};

const StickyHeaderWrapper = styled("div")(({}) => ({
  width: "100%",
  overflow: "hidden",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1.5rem 6rem",
  position: "sticky",
  top: 0,
  background: "#FFFFFF",
  zIndex: 100,

  boxShadow: "-1px 10px 22px -23px rgba(0,0,0,0.7)",
  WebkitBoxShadow: "-1px 10px 22px -23px rgba(0,0,0,0.7)",
  MozBoxShadow: "-1px 10px 22px -23px rgba(0,0,0,0.7)",

  "& > div": {
    "& > p": {
      fontSize: "1.8rem",
      fontFamily: "'Avenir', roboto",
      fontWeight: "400",
    },
  },
}));

export default StickyHeader;
