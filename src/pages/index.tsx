import Crafts from "@/components/Molecules/Crafts";
import Footer from "@/components/Molecules/Footer";
import HowWeDeliver from "@/components/Molecules/HowWeDeliver";
import HomePageHero from "@/components/Molecules/Jumbo";
import Projects from "@/components/Molecules/Jumbo/Projects";
import Testimonials from "@/components/Molecules/Testimonials";
import WhatWeDeliver from "@/components/Molecules/WhatWeDeliver";
import Applayout from "@/layout/AppLayout";
import { styled } from "@mui/material";
import Image from "next/image";
import arrowDown from "../../public/images/arrowDown.svg";
import ScrollIntoView from "react-scroll-into-view";
import StickyHeader from "@/components/Molecules/Header/StickyHeader";
import { LegacyRef, useEffect, useRef, useState } from "react";

const HomePageWrapper = styled("div")(() => ({
  // display: "flex",
  // userSelect: "none",
}));

const ArrowDown = styled("div")(() => ({
  textAlign: "center",
  width: "100%",
  margin: "4rem 0 10rem 0",
  cursor: "pointer",
}));

export default function Home() {
  const [isSticky, setSticky] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (ref.current) {
      const top = Math.abs(ref.current.getBoundingClientRect().top);
      setSticky(top >= 800);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);

  // console.log(isSticky);

  return (
    <Applayout titleTag="Home">
      <HomePageWrapper ref={ref}>
        <StickyHeader sticky={isSticky} />
        <HomePageHero />
        <ArrowDown>
          <ScrollIntoView selector={`#how-we-deliver`}>
            <Image
              src={arrowDown}
              alt="arrow-down"
              width={45}
              className="scroll-arrow"
              onClick={() => console.log("clicked")}
            />
          </ScrollIntoView>
        </ArrowDown>
        <HowWeDeliver />
        <WhatWeDeliver />
        <Projects />
        <Crafts />
        <Testimonials />
        <Footer />
      </HomePageWrapper>
    </Applayout>
  );
}
