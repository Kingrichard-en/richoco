import { Box, BoxProps, styled, Theme } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import avatar1 from "../../../assets/images/avatar1.png";
import jude from "../../../assets/images/testimonials/jude.png";
import freeman from "../../../assets/images/testimonials/freeman.png";
import avatar2 from "../../../assets/images/avatar2.png";
import arrowLeft from "../../../assets/images/arrowLeft.svg";
import arrowRight from "../../../assets/images/arrowRight.svg";
import Flex from "@/components/Flex";
import Image from "next/image";
import { MUIStyledCommonProps } from "@mui/system";
interface indexProps {
  isMobile: boolean;
}

interface CustomComponentProps extends MUIStyledCommonProps<Theme> {
  isMobile: boolean;
}

export const Testimonials: React.FC<indexProps> = ({ isMobile }) => {
  const settings = {
    dots: false,
    autoplay: false,
    autoplaySpeed: 4300,
    // slidesToShow: 1,
    // slidesToScroll: .5,
    initialSlide: 0,
    // speed: 2000,
    slidesPerRow: isMobile ? 1 : 2,
    adaptiveHeight: true,
    accessibility: true,
    infinite: false,
    centerMode: true,
    // centerPadding: "80%",
    prevArrow: (
      <div>
        <Image
          src={arrowLeft}
          alt="previous"
          onClick={() => console.log("sdflsdjflskdjf")}
        />
      </div>
    ),
    nextArrow: (
      <div>
        <Image src={arrowRight} alt="next" />
      </div>
    ),

    arrows: true,
    //    appendDots: (dots) => <ul>{dots}</ul>,
    //    ...(paging && {
    //      customPaging: (i) => (
    //        <div className="ft-slick__dots--custom">
    //          <div className="loading" />
    //        </div>
    //      ),
    //    }),
  };

  const testimonials = [
    {
      id: 1,
      name: "Jude Onicha",
      position: "Founder of Usecheckin",
      description:
        "Apart from being professional and highly creative, their team brought an approach we hadn't seen before. Always focused on data & results, Richoco had us work our concepts and vision backwards; designing for outcome. I Highly recommend them for any digital design work.",
      avatar: jude,
    },

    {
      id: 2,
      name: "Freeman Faithful",
      position: "Co-Founder & CEO at StoVoo",
      description:
        "They take the time to listen and understand the project brief and then through workshops completely transform your idea into a visual identity. We hardly had to ask for any amends and completely fell in love with what they delivered from the get go. Their design process is faultless",
      avatar: freeman,
    },

    {
      id: 3,
      name: "Aastik Saini",
      position: "Asst. V P at LegalPay",
      description:
        "Their design delivery style is fantastic and it really helped us all get on the same page from day one. Richard Enuenweisu's technical and commercial knowledge and his obvious design talent delivered a strong brand identity and a seamless UI beyond our expectation.",
      avatar: avatar1,
    },
    {
      id: 1,
      name: "Ambarish Gupta",
      position: "Founder & CEO at Basis Vectors",
      description:
        "Loved working with Richard and the team. Always clear, professional, outstanding, friendly, clinical and creative, forward-thinking individuals who deliver results. Looking forward to working with them again in the future, it was an absolutely great experience.",
      avatar: avatar1,
    },
  ];

  return (
    <TestimonialsWrapper
      style={{
        padding: isMobile ? "5rem 0 0 2rem" : "10rem 0 10rem 10rem",
        height: isMobile ? "75rem" : "auto",
        paddingLeft: "10%",
      }}
    >
      {/* <div style={{}}> */}
      <h1
        style={{
          fontSize: isMobile ? "3.8rem" : "4.8rem",
          fontWeight: 700,
        }}
      >
        Job appreciations
      </h1>
      <p>
        From various startups and brands across mobile, web, web3, Fintech
        related projects.
      </p>
      <SliderWrapper
        style={{
          margin: isMobile ? "2rem 0" : "10rem 0",

          // '& .slick-slide': {}
        }}
        isMobile={isMobile}
        data-aos="fade-up"
      >
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} isMobile={isMobile}>
              <Flex align="center" gap="1.2rem" direction="row">
                <Image src={testimonial.avatar} alt="testimonial" width={60} />
                <Flex direction="column" gap=".1rem">
                  <h3 style={{ fontSize: isMobile ? "1.8rem" : "2rem" }}>
                    {testimonial.name}
                  </h3>
                  <h5>{testimonial.position}</h5>
                </Flex>
              </Flex>
              <p style={{ fontSize: isMobile ? "1.6rem" : "2rem" }}>
                {testimonial.description}
              </p>
            </TestimonialCard>
          ))}
        </Slider>
      </SliderWrapper>
      {/* </div> */}
    </TestimonialsWrapper>
  );
};

const TestimonialsWrapper = styled("div")(() => ({
  background: "#F6F6F6",
  "& p": {
    fontSize: "2rem",
    fontWeight: 400,
    color: "#4F4F4F",
    marginTop: "4rem",
    lineHeight: "2.5rem",
  },
}));

const arrowStyles = (isMobile: boolean) => {
  return {
    top: isMobile ? "115%!important" : "140% !important",
    cursor: "pointer",
    border: "1px solid #505050",
    borderRadius: "50%",
    // padding: "1rem",
    height: isMobile ? "5rem" : "6rem",
    width: isMobile ? "5rem" : "6rem",
    display: "flex!important",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
    // height: '100%',
    "&>img": {
      width: "10px",
    },

    "&:before": {
      width: 0,
      content: "''",
    },

    "&.slick-disabled": {
      border: "none!important",
      cursor: "not-allowed",
    },
  };
};

const SliderWrapper = styled("div", {
  shouldForwardProp: (prop) => prop !== "isMobile",
})<BoxProps & { isMobile: boolean }>(({ isMobile }) => ({
  //   width: '90%!important',
  ".slick-track": {
    // width: "100%!important",
    display: "flex",
  },
  "& .slick-list": {
    padding: "0!important",
  },
  "& .slick-slide": {
    "& div": {
      display: "flex",
      alignSelf: "stretch",
      gap: "2rem",
    },
    marginRight: "2rem",
  },
  ".slick-prev": {
    left: isMobile ? "28%!important" : "42% !important",
    ...arrowStyles(isMobile),
  },
  ".slick-next": {
    right: isMobile ? "40%!important" : "48% !important",
    ...arrowStyles(isMobile),
  },
  // ".slick-slide": {
  //   width: isMobile ? "730px!important" : "100%",
  // },
  ".slick-slide.slick-active.slick-center.slick-current": {
    width: isMobile ? "350px!important" : "100%",
  },
  //   },
})) as any;

const TestimonialCard = styled("div", {
  shouldForwardProp: (prop) => prop !== "isMobile",
})<BoxProps & { isMobile: boolean }>(({ isMobile }) => ({
  cursor: "move",
  background: "#fff",
  padding: "3rem",
  borderRadius: "8px",
  //   width: "40%!important",
  "& h3": {
    fontWeight: 700,
    color: "#4F4F4F",
  },
  "& h5": {
    fontSize: "1.6rem",
    marginTop: ".5rem",
  },
  "& p": {
    color: "#707070",
    fontWeight: 400,
  },
})) as React.FC<BoxProps & { isMobile: boolean }>;
export default Testimonials;
