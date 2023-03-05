import Crafts from "@/components/Molecules/Crafts";
import Footer from "@/components/Molecules/Footer";
import StickyHeader from "@/components/Molecules/Header/StickyHeader";
import HowWeDeliver from "@/components/Molecules/HowWeDeliver";
import HomePageHero from "@/components/Molecules/Jumbo";
import Projects from "@/components/Molecules/Jumbo/Projects";
import Testimonials from "@/components/Molecules/Testimonials";
import WhatWeDeliver from "@/components/Molecules/WhatWeDeliver";
import { useScreenResolution } from "@/hooks/useScreenResolution";
import Applayout from "@/layout/AppLayout";
import { styled } from "@mui/material";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ScrollIntoView from "react-scroll-into-view";
import arrowDown from "../assets/images/arrowdown.svg";

const HomePageWrapper = styled("div")(() => ({
  // display: "flex",
  // userSelect: "none",
}));

const ArrowDown = styled("div")(() => ({
  textAlign: "center",
  width: "100%",
  margin: "7rem 0 10rem 0",
  cursor: "pointer",
}));

export default function Home() {
  const [isSticky, setSticky] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { isMobile } = useScreenResolution();
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

  return (
    <Applayout titleTag="Home">
      <HomePageWrapper ref={ref}>
        <StickyHeader sticky={isMobile ? true : isSticky} />
        <HomePageHero isMobile={isMobile} />
        {!isMobile && (
          <ArrowDown>
            <ScrollIntoView selector={`#how-we-deliver`}>
              <Image
                src={arrowDown}
                alt="arrow-down"
                width={45}
                className="animate__animated animate__bounce animate__infinite animate__slower"
                onClick={() => console.log("clicked")}
              />
            </ScrollIntoView>
          </ArrowDown>
        )}
        <HowWeDeliver isMobile={isMobile}  />
        <WhatWeDeliver isMobile={isMobile} />
        <Projects isMobile={isMobile} />
        <Crafts isMobile={isMobile} />
        <Testimonials isMobile={isMobile} />
        <Footer isMobile={isMobile} />
      </HomePageWrapper>
    </Applayout>
  );
}
