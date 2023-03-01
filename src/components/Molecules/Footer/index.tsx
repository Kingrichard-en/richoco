import { styled } from "@mui/material";
import Image from "next/image";
import React from "react";
import logoLgWhite from "../../../../public/images/logo-lg-White.svg";
import phone from "../../../../public/images/phone.svg";
import ig from "../../../../public/images/ig.svg";
import linkedin from "../../../../public/images/linkedin.svg";
import instalogo from "../../../../public/images/instalogo.png";
import tree from "../../../../public/images/tree.svg";
import Button from "@/components/Button";

interface indexProps {}

export const Footer: React.FC<indexProps> = ({}) => {
  return (
    <FooterWrapper>
      <Tips>
        <div>
          <Image src={tree} alt="design tips and case studies" width="300" />
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
          <Button text="Go to instagram" border="1px solid #FFFFFF" borderRadius="28px" />
        </TipsContent>
      </Tips>
      <MainFooter>
        <Image src={logoLgWhite} alt="logo" width={600} />
        <p>
          © 2022 Richoco Studio · Branding & Creative Design Agency · Chaina
          Avenue Jaba, kano Nigeria.
        </p>
        <div>
          <Image src={phone} alt="logo" />
          <p>Nigeria +234 80 6077 1255</p>
          <Image src={linkedin} alt="logo" />
          <Image src={ig} alt="logo" />
        </div>
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
  padding: "20rem",
  paddingBottom: "1rem",

  "& img": {
    marginBottom: "10rem",
  },

  "& p": {
    color: "#fff",
    fontSize: "1.5rem",
    fontWeight: "400",
    padding: ".4rem 1rem",
    // "&:first-of-type": {
    //   marginBottom: "2rem",
    // },
  },

  "& div": {
    "& img": {
      height: "2rem",
      paddingLeft: "1rem",

      "&:first-of-type": {
        width: "4rem",
      },
    },
    "& p": {
      borderRight: "1px solid #fff",
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
  fontSize: "1.5rem",
  fontWeight: 300,
  color: "#fff",
  margin: "4rem 0",
  maxWidth: "70%",
}));

const TipsContent = styled("div")(() => ({
  // width: '50%'
}));

export default Footer;
