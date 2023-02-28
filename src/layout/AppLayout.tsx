import Head from "next/head";
import React from "react";

interface ApplayoutProps {
  children: React.ReactNode;
  titleTag?: string;
}

export const Applayout: React.FC<ApplayoutProps> = ({ children, titleTag }) => {
  const title = titleTag ? `${titleTag} | Richoco` : "Richoco";
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </>
  );
};
export default Applayout;
