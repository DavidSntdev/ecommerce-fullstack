"use client";
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
    <Image
      alt="fundo"
      src={isMobile ? props.fundoMobile : props.fundoDesktop}
      className="w-full z-0 rounded-none"
    />
  );
}
