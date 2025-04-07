import { SidebarTrigger } from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import { AuthButton } from "@/modules/auth/ui/components/auth-button";
import { StudioUploadModal } from "../studio-upload-modal";

export const StudioNavbar = () => {
  return (
    <div className="fixed top0 left-0 right-0 h-16 bg-white flex items-center px-2 pr-5 z-50 border-b shadow-md">
      <div className="flex items-center gap-4 w-full">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <SidebarTrigger />
          <Link href="/studio" className="hidden md:block">
            <div className="flex items-center gap-0">
              <Image src="/logo.svg" height={32} width={32} alt="Logo" />
              <p className="font-xl tracking-tight font-black">Cine Studio</p>
            </div>
          </Link>
        </div>
        <div className="flex-1"></div>

        {/* Sign in */}
        <div className="flex flex-shrink-0 items-center gap-4">
          <StudioUploadModal/>
          <AuthButton />
        </div>
      </div>
    </div>
  );
};
