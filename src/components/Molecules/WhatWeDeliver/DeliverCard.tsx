import { styled } from "@mui/material";
import Image from "next/image";
import React from "react";
import checkMark from "../../../../public/images/check.png";
interface DeliverCardProps {
  title: string;
  description: string;
  features: string[];
  bg?: string;
}

export const DeliverCard: React.FC<DeliverCardProps> = ({
  title,
  description,
  features,
  bg = "#FFFFFF",
}) => {
    const textColor = bg === "#0A0A0A" ? "#F6F6F6" : "#505050";
  return (
    <DeliverCardWrapper
      style={{
        background: bg,
        padding: "3rem",
        borderRadius: "20px",
        color: textColor,
      }}
    >
      <CardTitle style={{}}>{title}</CardTitle>
      <p>{description}</p>

      <ul>
        {features.map((feature, index) => (
          <li key={index}>
            <Image src={checkMark} alt="check-mark" width={20} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </DeliverCardWrapper>
  );
};

const DeliverCardWrapper = styled("div")(({  }) => ({
    width: "30%",
  "& p": {
    fontSize: "1.6rem",
    fontWeight: 400,
    marginTop: "2rem",
  },
    "& ul": {
        listStyle: "none",
        padding: '1rem 0',

        "& li": {
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginTop: "1rem",
            cursor: "pointer",
            padding: ".5rem 0",
            "& span": {
                fontSize: "1.6rem",
                fontWeight: 400,
            },

        }
    }
}));
const CardTitle = styled("h1")(() => ({
  fontFamily: "'Avenir', sans-serif",
  fontSize: "4.8rem",
  fontWeight: 700,
//   color: "#0A0A0A",
}));

export default DeliverCard;
