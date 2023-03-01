import { styled } from "@mui/material";
import React from "react";

interface indexProps {}

export const Testimonials: React.FC<indexProps> = ({}) => {
  return (
    <TestimonialsWrapper>
      <h1>Job appreciations</h1>
      <p>
        From various startups and brands across mobile, web, web3, Fintech
        related projects.
      </p>
    </TestimonialsWrapper>
  );
};

const TestimonialsWrapper = styled("div")(() => ({
  background: "#F6F6F6",
  padding: "10rem",

  "& h1": {
    fontSize: "5rem",
    fontWeight: 900,
  },
  "& p": {
    fontSize: "1.5rem",
    fontWeight: 400,
    color: "#4F4F4F",
    marginTop: "4rem",
  },
}));

export default Testimonials;