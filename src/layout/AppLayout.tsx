import Head from "next/head";
import React from "react";

interface ApplayoutProps {
  children: React.ReactNode;
  titleTag: string;
}

export const Applayout: React.FC<ApplayoutProps> = ({ children, titleTag }) => {
  return (
    <>
      <Head>
        <title> {titleTag} | Richoco</title>
        <meta name="description" content="Richoco Studio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/rlogo.jpeg" />
      </Head>
      {children}
    </>
  );
};
export default Applayout;
