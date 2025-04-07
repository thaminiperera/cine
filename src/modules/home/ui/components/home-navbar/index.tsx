import { SidebarTrigger } from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import { SearchInput } from "./search-input";
import { AuthButton } from "@/modules/auth/ui/components/auth-button";

export const HomeNavbar = () => {
  return (
    <div className="fixed top0 left-0 right-0 h-16 bg-white flex items-center px-2 pr-5 z-50">
      <div className="flex items-center gap-4 w-full">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <SidebarTrigger />
          <Link href="/" className="hidden md:block">
            <div className="flex items-center gap-0">
              <Image src="/logo.svg" height={32} width={32} alt="Logo" />
              <p className="font-xl tracking-tight font-black">Cine</p>
            </div>
          </Link>
        </div>

        {/* Search  */}
        <div className="flex-1 flex justify-center max-w-[720px] mx-auto">
          <SearchInput />
        </div>


        {/* Sign in */}
        <div className="flex flex-shrink-0 items-center gap-4"><AuthButton/></div>
      </div>
    </div>
  );
};
