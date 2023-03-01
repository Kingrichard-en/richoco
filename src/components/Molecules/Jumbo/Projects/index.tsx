import { styled } from "@mui/material";
import React from "react";

import checkinCS from "../../../../../public/case-studies/checkin-web.png";
import stovooCS from "../../../../../public/case-studies/stovoo-web.png";
import ethaCS from "../../../../../public/case-studies/etha-web.png";
import mamiCS from "../../../../../public/case-studies/mami-web.png";
import majestyCS from "../../../../../public/case-studies/majesty-web.png";
import remitCS from "../../../../../public/case-studies/remit-web.png";
import vorroCS from "../../../../../public/case-studies/vorro-web.png";
import Image from "next/image";
import Button from "@/components/Button";

interface indexProps {
  isMobile: boolean;
}

export const Projects: React.FC<indexProps> = ({ isMobile }) => {
  const projects = [
    {
      name: "CheckIn",
      description:
        "See how affordable booking process have been optimized. Vacation now made easy!",
      image: checkinCS,
      url: "https://usecheckin.com",
    },
    {
      name: "Stovoo",
      description:
        "A food delivery revolution in an app. Binge, order and learn from seasoned vendors!",
      image: stovooCS,
      url: "https://stovoo.com",
    },
    {
      name: "Etha",
      description:
        "Introducing Etha – your new favorite interactive social news platform, which helps you hold politicians accountable.",
      image: ethaCS,
      url: null,
    },
    {
      name: "mamiMarkets",
      description:
        "One-stop grocery delivery e-commerce platform, connects you with unlimited vendors.",
      image: mamiCS,
      url: null,
    },
    {
      name: "His Majesty",
      description:
        "The Royal Website for Ògíamẹ̀ Atúwàtse III - The Olú of Warri - Nigeria.",
      image: majestyCS,
      url: "https://his-majesty.com",
    },
    {
      name: "Remitafrika",
      description:
        "The Royal Website for Ògíamẹ̀ Atúwàtse III - The Olú of Warri - Nigeria.",
      image: remitCS,
      url: "https://remitafrika.com",
    },
    {
      name: "Vorro",
      description:
        "An open, scalable any-to-any integration and workflow platform that enables secure communication",
      image: vorroCS,
      url: "https://vorro.com",
    },
  ];

  return (
    <ProjectWrapper style={{ paddingTop: isMobile ? "7rem" : "10rem" }}>
      <ProjectsHeader>
        <h1
          style={{
            fontSize: isMobile ? "4rem" : "4.8rem",
            width: isMobile ? "60%" : "100%",
            margin: "0 auto",
          }}
        >
          Projects and case study
        </h1>
        <p
          style={{
            maxWidth: isMobile ? "90%" : "50%",
            lineHeight: "2.3rem",
          }}
        >
          We design compelling Brand Identities and impactful Digital
          Experiences for innovative companies around the world. Using the
          industry-proven methods Jobs to be Done and Design Sprint, we have
          developed a highly optimised design delivery process that brings
          results in just a few weeks. Sounds like what you’re looking for?
        </p>
      </ProjectsHeader>
      <CaseStudies
        style={{ width: isMobile ? "95%" : "80%", margin: "0 auto" }}
      >
        {projects.map((project, index) => (
          <CaseStudy
            key={index}
            style={{
              flexDirection: isMobile ? "column" : "row",
              height: isMobile ? '70rem' : "60rem",
            }}
          >
            <section
              style={{
                width: isMobile ? "100%" : "35%",
                marginTop: isMobile ? "5rem" : "10rem",
                padding: isMobile ? "0 2rem" : "0 9rem",
              }}
            >
              <h1>{project.name}</h1>
              <p>{project.description}</p>
              <Button
                text={
                  project?.url ? "View live project" : "Case study coming soon"
                }
                background={project?.url ? "#0A0A0A" : "#C4DBEC"}
                border={"none"}
                color={project?.url ? "#fff" : "#0A0A0A"}
                borderRadius="28px"
                onSubmit={() =>
                  project?.url ? window.open(project.url, "_blank") : null
                }
                fontSize={isMobile ? "1.6rem" : "1.5rem"}
                width={isMobile ? "21rem" : "245px"}
                height={isMobile ? "4.8rem" : "56px"}
              />
            </section>
            <Image
              src={project.image}
              alt={project.name}
              style={{
                width: isMobile ? "100%" : "65%",
                marginTop: isMobile ? "2rem" : 0
              }}
            />
          </CaseStudy>
        ))}
      </CaseStudies>
    </ProjectWrapper>
  );
};

const ProjectWrapper = styled("div")(() => ({
  marginTop: "12rem",
  background: "#0A0A0A",

  paddingBottom: "2rem",
}));

const ProjectsHeader = styled("div")(() => ({
  textAlign: "center",
  "& h1": {
    color: "#fff",

    fontWeight: 700,
  },
  "& p": {
    color: "#fff",
    fontSize: "1.6rem",
    fontWeight: 300,

    letterSpacing: "0px",
    margin: "3rem auto",
  },
}));

const CaseStudies = styled("div")(() => ({
  marginTop: "7rem",
}));

const CaseStudy = styled("div")(() => ({
  display: "flex",
  borderRadius: "16px",
  alignItems: "center",
  margin: "10rem auto",
  overflow: "hidden",
  background: "#F8F8F8",
  "& section": {
    "& h1": {
      color: "#0A0A0A",
      fontSize: "4.8rem",
      fontWeight: 700,
    },
    "& p": {
      color: "#0A0A0A",
      fontSize: "1.6rem",
      fontWeight: 300,
      //   maxWidth: "70%",
      paddingTop: "3rem",
      paddingBottom: "4rem",
    },
  },
  "& img": {
    height: "100%",
  },
}));

export default Projects;
