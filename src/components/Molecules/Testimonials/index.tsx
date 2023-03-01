import { styled } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import avatar1 from "../../../../public/images/avatar1.png";
import avatar2 from "../../../../public/images/avatar2.png";
import arrowLeft from "../../../../public/images/arrowLeft.svg";
import arrowRight from "../../../../public/images/arrowRight.svg";
import Flex from "@/components/Flex";
import Image from "next/image";
interface indexProps {}

export const Testimonials: React.FC<indexProps> = ({}) => {
  const settings = {
    dots: false,
    autoplay: false,
    autoplaySpeed: 4300,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    initialSlide: 0,
    // speed: 2000,
    slidesPerRow: 2,
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
    <TestimonialsWrapper>
      <h1>Job appreciations</h1>
      <p>
        From various startups and brands across mobile, web, web3, Fintech
        related projects.
      </p>
      <SliderWrapper>
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id}>
              <Flex align="center" gap="1.2rem" direction="row">
                <Image src={testimonial.avatar} alt="testimonial" width={80} />
                <Flex direction="column" gap=".1rem">
                  <h3>{testimonial.name}</h3>
                  <h5>{testimonial.position}</h5>
                </Flex>
              </Flex>
              <p>{testimonial.description}</p>
            </TestimonialCard>
          ))}
        </Slider>
      </SliderWrapper>
    </TestimonialsWrapper>
  );
};

const TestimonialsWrapper = styled("div")(() => ({
  background: "#F6F6F6",
  padding: "10rem 0 10rem 10rem",
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

const arrowStyles = {
  top: "140% !important",
  cursor: "pointer",
  border: "1px solid #505050",
  borderRadius: "50%",
  // padding: "1rem",
  height: "6rem",
  width: "6rem",
  display: "flex!important",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 100,
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
    cursor: 'not-allowed'
  },
};

const SliderWrapper = styled("div")(() => ({
  margin: "10rem 0",

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
    left: "42% !important",
    ...arrowStyles,
  },
  ".slick-next": {
    right: "48% !important",
    ...arrowStyles,
  },

  //   },
}));

const TestimonialCard = styled("div")(() => ({
  cursor: "move",
  background: "#fff",
  padding: "3rem",
  borderRadius: "8px",
  //   width: "40%!important",
  "& h3": {
    fontSize: "2rem",
    fontWeight: 700,
    color: "#4F4F4F",
  },
  "& h5": {
    fontSize: "1.3rem",
    marginTop: ".5rem",
  },
  "& p": {
    fontSize: "1.8rem",
    color: "#707070",
    fontWeight: 400,
  },
}));

export default Testimonials;
