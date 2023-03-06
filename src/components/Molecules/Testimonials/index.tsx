import { Box, BoxProps, styled, Theme } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import avatar1 from "../../../assets/images/avatar1.png";
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
    // slidesToScroll: 1,
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
      name: "Meli Brono",
      position: "Director at Spotify",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.",
      avatar: avatar1,
    },

    {
      id: 2,
      name: "Amalia Jo",
      position: "CEO of ABC",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.",
      avatar: avatar2,
    },

    {
      id: 3,
      name: "John Doe",
      position: "Director at Spotify",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.",
      avatar: avatar1,
    },
    {
      id: 1,
      name: "Melina Brono",
      position: "Director at Spotify",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.",
      avatar: avatar1,
    },

    {
      id: 2,
      name: "Amalia Brono",
      position: "CEO of ABC",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.",
      avatar: avatar2,
    },

    {
      id: 3,
      name: "John Doe",
      position: "Director at Spotify",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.",
      avatar: avatar1,
    },
    {
      id: 1,
      name: "Melina Brono",
      position: "Director at Spotify",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.",
      avatar: avatar1,
    },

    {
      id: 2,
      name: "Amalia Brono",
      position: "CEO of ABC",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.",
      avatar: avatar2,
    },

    {
      id: 3,
      name: "John Doe",
      position: "Director at Spotify",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.",
      avatar: avatar1,
    },
    {
      id: 1,
      name: "Melina Brono",
      position: "Director at Spotify",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.",
      avatar: avatar1,
    },

    {
      id: 2,
      name: "Amalia Brono",
      position: "CEO of ABC",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.",
      avatar: avatar2,
    },

    {
      id: 3,
      name: "John Doe",
      position: "Director at Spotify",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.",
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
          fontWeight: 900,
        }}
        >
        Job appreciations
      </h1>
      <p
      >
        From various startups and brands across mobile, web, web3, Fintech
        related projects.
      </p>
      <SliderWrapper
        style={{
          margin: isMobile ? "2rem 0" : "10rem 0",
          
          // '& .slick-slide': {}
        }}
        isMobile={isMobile}
        data-aos='fade-up'
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
