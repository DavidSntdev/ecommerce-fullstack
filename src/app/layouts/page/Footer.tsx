import React from "react";
import { Link } from "@nextui-org/link";
import { SiGmail } from "react-icons/si";
import {
  FaFacebookSquare,
  FaInstagram,
  FaRegCopyright,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full flex items-center text-default-50 flex-col justify-center py-3 bg-default-foreground">
      <div className="h-auto flex flex-col justify-between max-w-7xl w-full px-5 md:px-10 md:py-5 gap-5">
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-12 md:col-span-3 items-center md:items-stretch text-center md:text-start">
            <h1 className="hidden md:block text-2xl md:text-3xl">
              Leide Lingeries
            </h1>
          </div>
          <div className="col-span-12 md:col-span-3 flex flex-col gap-1 items-center md:items-stretch text-center md:text-start">
            <h1 className="text-xl md:text-2xl">Loja Online</h1>
            <p className="text-sm text-default-500">Negociação via Whatsapp</p>
            <p className="text-sm text-default-500">Endereço da Loja</p>
          </div>
          <div className="col-span-12 md:col-span-3 flex flex-col gap-1 items-center md:items-stretch text-center md:text-start">
            <h1 className="text-xl md:text-2xl">Contatos</h1>
            <p className="text-sm text-default-500">Dona da Loja</p>
            <p className="text-sm text-default-500">Desenvolvedor</p>
          </div>
          <div className="col-span-12 md:col-span-3 flex flex-col items-center lg:items-end">
            <h1 className="text-xl md:text-2xl">Desenvolvimento</h1>
            <p className="text-default-500 flex gap-1 items-center">
              Copyright <FaRegCopyright /> David Santos
            </p>
            <Link
              isExternal
              className="flex gap-1 text-current"
              href="https://github.com/DavidSntdev"
              title="Github do desenvolvedor"
            >
              <span className="text-default-500">Desenvolvido por</span>
              <p className="text-primary">David Santos</p>
            </Link>
          </div>
        </div>
        <div className="flex flex-row justify-center md:justify-between gap-2">
          <div className="flex justify-center md:justify-start gap-3">
            <Link isExternal href="https://wa.me/5511971647488">
              <FaWhatsapp className="text-green-600 cursor-pointer" size={40} />
            </Link>
          </div>
          <div className="flex order-2 justify-center items-center md:justify-end gap-3">
            <Link
              isExternal
              href="https://web.facebook.com/zuleide.silva.581730"
            >
              <FaFacebookSquare
                className="cursor-pointer text-blue-500"
                size={40}
              />
            </Link>
            <FaInstagram className="cursor-pointer text-purple-600" size={40} />
            <SiGmail className="text-red-500 cursor-pointer" size={40} />
          </div>
        </div>
      </div>
    </footer>
  );
}
