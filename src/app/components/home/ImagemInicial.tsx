"use client";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
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
    <div className="flex flex-col items-center">
      <Image
        alt="fundo"
        src={isMobile ? props.fundoMobile : props.fundoDesktop}
        className="w-full z-0 rounded-none"
      />
      <Button
        as="a"
        className="mt-[-60px] px-5 h-[50px] bg-transparent hover:bg-default-900 hover:text-default-50 text-default-50 text-xl font-bold"
        radius="md"
        href={props.url}
      >
        {props.textButton}
      </Button>
    </div>
  );
}
