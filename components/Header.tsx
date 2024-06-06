import Image from "next/image";
import AuthButton from "./AuthButton";

export default function Header() {
  return (
    <div>
      <div className="w-screen flex justify-between px-16 py-4 border-b-blue-800 border-2 items-center">
        <a href="/">
          <Image 
            width={139.5}
            height={38.75}
            src={"/Light.png"}
            alt=""
            priority={false}
          />
        </a>
        <div className="text-gray-500">
          <nav className="gap-3 flex">
            <a href="/#" className="focus:text-blue-800 focus:border-b-blue-800 focus:border-b-2 flex gap-2 hover:text-gray-950">Inicio</a>
            <a href="/#sobre" className="focus:text-blue-800 focus:border-b-blue-800 focus:border-b-2 flex gap-2 hover:text-gray-950">Sobre</a>
            <a href="/#produtos" className="focus:text-blue-800 focus:border-b-blue-800 focus:border-b-2 flex gap-2 hover:text-gray-950">Produtos</a>
            <a href="/#planos" className="focus:text-blue-800 focus:border-b-blue-800 focus:border-b-2 flex gap-2 hover:text-gray-950">Planos</a>
            <a href="/#equipe" className="focus:text-blue-800 focus:border-b-blue-800 focus:border-b-2 flex gap-2 hover:text-gray-950">Equipe</a>
            <a href="/#contato" className="focus:text-blue-800 focus:border-b-blue-800 focus:border-b-2 flex gap-2 hover:text-gray-950">Contato</a>
          </nav>
        </div>
        < AuthButton />
      </div>
    </div>
  );
}
