import HowWeDeliver from "@/components/Molecules/HowWeDeliver";
import HomePageHero from "@/components/Molecules/Jumbo";
import Projects from "@/components/Molecules/Jumbo/Projects";
import WhatWeDeliver from "@/components/Molecules/WhatWeDeliver";
import Applayout from "@/layout/AppLayout";
import { styled } from "@mui/material";
import Image from "next/image";
import arrowDown from "../../public/images/arrowDown.svg";

const HomePageWrapper = styled("div")(() => ({
  // display: "flex",
  // userSelect: "none",
}));

const ArrowDown = styled("div")(() => ({
  textAlign: "center",
  width: "100%",
  marginTop: "4rem",
  cursor: "pointer",
}));

export default function Home() {
  return (
    <Applayout titleTag="Home">
      <HomePageWrapper>
        <HomePageHero />
        <ArrowDown>
          <Image
            src={arrowDown}
            alt="arrow-down"
            width={45}
            className="scroll-arrow"
            onClick={() => console.log("clicked")}
          />
        </ArrowDown>
        <HowWeDeliver />
        <WhatWeDeliver />
        <Projects />
        <Crafts/>
      </HomePageWrapper>
    </Applayout>
  );
}
