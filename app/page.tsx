"use client"

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import Image from "next/image";
import AuthButton from "@/components/AuthButton";


export default async function Index() {

  return (
    <div>
      <header>
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


export default async function AuthButton() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const signOut = async () => {
    "use server";

    const supabase = createClient();
    await supabase.auth.signOut();
    return redirect("/login");
  };

  return user ? (
    <div className="flex items-center gap-4">
      <form action={signOut}>
        <button className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover">
          Logout
        </button>
      </form>
    </div>
  ) : (
    <Link
      href="/login"
      className="px-4 py-1 bg-blue-800 text-white rounded-2xl flex items-center h-fit hover:bg-blue-950"
    >
      Login
    </Link>
  );
}

      </div>
      </header>
      <br /><br /><br /><br /><br /><br /><br />
      <footer>
      <div className="flex flex-col border-t-blue-800 border-2">
        <div className="flex justify-between px-16 py-16">
            <div>
                <div className="flex flex-col gap-6">
                    <h3 className="text-[20px] font-semibold text-blue-800">Short Brief About Us</h3>
                    <p className="text-[14px] max-w-[480px] text-[#535353]">Lorem ipsum dolor sit amet consectetur. Bibendum consequat laoreet turpis in pellentesque sem id ut. Feugiat quam porttitor in augue sed quis pellentesque quam purus. Ac euismod ac proin vitae vulputate. Urna facilisis varius vestibulum at gravida turpis. Viverra imperdiet convallis elementum sed mauris. Ultricies in morbi eu felis nibh tellus.</p>
                </div>
                <div className="flex gap-4 mt-8">
                        <a href="/">
                            <Image src={"/Icons/facebookIconSolid.png"} alt={""} width={19.89} height={19.89}/>
                        </a>
                        <a href="/">
                            <Image src={"/Icons/instagramIconSolid.png"} alt={""} width={19.89} height={19.89}/>
                        </a>
                        <a href="/">
                            <Image src={"/Icons/linkedinIconSolid.png"} alt={""} width={19.89} height={19.89}/>
                        </a>
                </div>
            </div>
            <div className="flex gap-20 text-[14px] text-[#535353]">
                <div className="flex flex-col gap-2">
                    <h3 className="text-[20px] text-blue-800 font-semibold">Mapa</h3>
                    <a href="">Inicio</a>
                    <a href="">Sobre</a>
                    <a href="">Contato</a>
                    <a href="">FAQ's</a>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="text-[20px] font-semibold text-blue-800">Serviços</h3>
                    <a href="">Chat</a>
                    <a href="">CRM</a>
                    <a href="">Agenda</a>
                    <a href="">I.A. Empresas</a>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="text-[20px] font-semibold text-blue-800">Dev's</h3>
                    <a href="">Features</a>
                    <a href="">API</a>
                </div>
            </div>
        </div>

        <div className="bg-[#1E1E1E] text-white flex flex-col py-7 items-center gap-3">

            <Image 
                src={"/LogotypeBrandnameDark.png"}
                width={139.5}
                height={38.75}
                alt=""
                priority={false}
            />

            <div className="w-[80%]">
                <hr className="bg-white"/>
            </div>

            <span className="text-[12px]">Todos os direitos reservados © 2022 Circulare S.A.</span>

        </div>
    </div>
      </footer>
    </div>
  );
}
