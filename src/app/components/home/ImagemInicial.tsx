"use client";

import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/react";
import { useState, useEffect } from "react";

interface ImagemInicialProps {
  url: string;
  fundoMobile: string;
  fundoDesktop: string;
  textButton: string;
}

export default function ImagemInicial(props: ImagemInicialProps) {
  const [isMobile, setIsMobile] = useState(false);
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 650);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col items-center relative gap-5">
      <Image
        alt="fundo"
        src={isMobile ? props.fundoMobile : props.fundoDesktop}
        className="w-full z-0 rounded-none"
      />
      <Button
        as="a"
        className="absolute top-[65%] md:top-[75%] lg:top-[80%] px-20 h-[60px] bg-default-50 opacity-40 border-2 border-default-900 text-default-900 text-xl font-bold"
        radius="sm"
        href={props.url}
      >
        {props.textButton}
      </Button>
    </div>
  );
}
