import { Button as MuiButton } from "@mui/material";
import { Property } from "csstype";
import React from "react";

interface ButtonProps {
  text: string;
  color?: string;
  background?: string;
  addon?: string;
  onSubmit?: React.FormEventHandler<HTMLButtonElement> | undefined;
  width?: string;
  height?: string;
  fontSize?: string;
  borderRadius?: string;
  textTransform?: Property.TextTransform | undefined;
  border?: string;
}
const Button: React.FC<ButtonProps> = ({
  text,
  color,
  background,
  addon,
  onSubmit,
  width,
  height,
  fontSize,
  textTransform = "initial",
  border,
  borderRadius,
  ...styles
}) => {
  const Btnstyles = {
    background: background,
    color: color || "#fff",
    width: width || "245px",
    height: height || "56px",
    fontSize: fontSize || "2rem",
    fontFamily: "'Avenir' sans-serif",
    borderRadius: borderRadius || "0px",
    fontWeight: "400",
    border: border || "1px solid #0A0A0A",
    ...styles,
  };
  return (
    <MuiButton style={{ ...Btnstyles }} onClick={onSubmit}>
      {/* {addon && <img src={addon} alt="" style={{ paddingRight: "10px" }} />} */}
      <span style={{ textTransform: textTransform }}>{text}</span>
    </MuiButton>
  );
};

export default Button;
