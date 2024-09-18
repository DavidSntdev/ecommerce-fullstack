import React from "react";
import NextHead from "next/head";

export const Head = ({ favicon }: { favicon: string }) => {
  return (
    <NextHead>
      <link href={favicon} rel="icon" />
    </NextHead>
  );
};
