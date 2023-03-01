import Button from "@/components/Button";
import Flex from "@/components/Flex";
// import { useScreenResolution } from "@/hooks/useScreenResolution";
import { styled } from "@mui/material";
import Image from "next/image";
import React from "react";
import richocoSmBlack from "../../../../public/images/logo-sm-black.svg";

interface StickyHeaderProps {
  sticky: boolean;
}

export const StickyHeader: React.FC<StickyHeaderProps> = ({ sticky }) => {
  // const { isMobile } = useScreenResolution();
  // console.log('got here', sticky, isMobile)
  // if (!sticky && !isMobile) return null;
  if (!sticky) return null;
  return (
    <StickyHeaderWrapper
      style={{
        // padding: isMobile ? "1rem" : "1.5rem 6rem",
      }}
    >
      <Image src={richocoSmBlack} alt="logo" />
      <Flex align="center" 
      // gap={isMobile ? "1.2rem" : "4rem"}
      >
        <p>Contact us</p>
        <Button
          text="Go bespoke!"
          color="#0A0A0A"
          borderRadius="28px"
          // width={isMobile ? "100px" : "245px"}
          // height={isMobile ? "40px" : "56px"}
          // fontSize={isMobile ? "1.3rem" : "2rem"}
        />
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
