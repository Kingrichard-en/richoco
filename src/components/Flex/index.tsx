import { styled } from "@mui/system";
import React from "react";

interface indexProps {
  children: React.ReactNode;
}

const FlexWrapper = styled("div")(() => ({
    display: "flex",
}));

export const Flex: React.FC<indexProps> = ({ children }) => {
  return <FlexWrapper>{children}</FlexWrapper>;
};
export default Flex;
