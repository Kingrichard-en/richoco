import { styled } from "@mui/material";
import Image from "next/image";
import React from "react";
import logoLgWhite from "../../../assets/images/logo-lg-white.svg";
import phone from "../../../assets/images/phone.svg";
import ig from "../../../assets/images/ig.svg";
import linkedin from "../../../assets/images/linkedin.svg";
import instalogo from "../../../assets/images/instalogo.png";
import tree from "../../../assets/images/tree.svg";
import Button from "@/components/Button";
import Flex from "@/components/Flex";

interface indexProps {
  isMobile: boolean;
}

export const Footer: React.FC<indexProps> = ({ isMobile }) => {
  return (
    <FooterWrapper>
      <Tips
        style={{
          flexDirection: isMobile ? "column" : "row",
        }}
      >
        <div>
          <Image
            src={tree}
            alt="design tips and case studies"
            width={isMobile ? "350" : "400"}
          />
        </div>
        <TipsContent>
          <Image
            src={instalogo}
            alt="design tips and case studies"
            width="120"
          />
          <TipsContentTitle>Design tips and case studies</TipsContentTitle>
          <TipsText>
            Follow us on Instagram to get tips to help you grow your products
            learn more about our design process
          </TipsText>
          <Button
            text="Go to instagram"
            border="1px solid #FFFFFF"
            borderRadius="28px"
          />
        </TipsContent>
      </Tips>
      <MainFooter
        style={{ padding: isMobile ? "7rem 4rem" : "20rem 20rem 2rem" }}
      >
        <Image
          src={logoLgWhite}
          alt="logo"
          width={isMobile ? 350 : 600}
          style={{
            marginBottom: isMobile ? "5rem" : "10rem",
          }}
        />
        <p style={{ marginBottom: isMobile ? "6rem" : '0' }}>
          © 2022 Richoco Studio · Branding & Creative Design Agency · Chaina
          Avenue Jaba, kano Nigeria.
        </p>

        <Flex align={"center"} direction={isMobile ? "column" : "row"}>
          <p
            style={{
              borderRight: isMobile ? "none" : "1px solid #fff",
              borderBottom: isMobile ? "1px solid #fff" : "none",
              paddingBottom: isMobile ? "20px" : "0",
              whiteSpace: "nowrap",
            }}
          >
            <Image src={phone} alt="logo" style={{ marginRight: "12px" }} />
            Nigeria +234 80 6077 1255
          </p>
          <div style={{ margin: isMobile ? "30px" : "0 20px" }}>
            <Image
              src={linkedin}
              alt="logo"
              width={90}
              style={{ marginRight: isMobile ? "20px" : 0 }}
            />
            <Image src={ig} alt="logo" width={90} />
          </div>
        </Flex>
      </MainFooter>
    </FooterWrapper>
  );
};

const FooterWrapper = styled("div")(() => ({
  background: "#2A2A2A",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
}));

const Tips = styled("div")(() => ({
  padding: "10rem",
  display: "flex",
  alignItems: "center",
  gap: "10rem",
}));
const MainFooter = styled("div")(() => ({
  background: "#0A0A0A",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",

  paddingBottom: "1rem",

  "& p": {
    color: "#fff",
    fontSize: "1.6rem",
    fontWeight: "400",
    padding: ".4rem 1rem",
    textAlign: "center",
    lineHeight: "2.5rem",
    // "&:first-of-type": {
    //   marginBottom: "2rem",
    // },
  },

  "& div": {
    "& div": {
      "& img": {
        height: "2rem",
        paddingLeft: "1rem",
      },
      "&:first-of-type": {
        width: "4rem",
      },
    },
    display: "flex",
    justifyContent: "center",
    height: "2rem",
    marginTop: "2rem",
  },
}));

const TipsContentTitle = styled("h1")(() => ({
  fontSize: "4.8rem",
  fontWeight: 900,
  color: "#fff",
  margin: "2rem 0",
}));
const TipsText = styled("h1")(() => ({
  fontSize: "2rem",
  fontWeight: 300,
  color: "#fff",
  margin: "4rem 0",
  maxWidth: "70%",
}));

const TipsContent = styled("div")(() => ({
  // width: '50%'
}));

export default Footer;
