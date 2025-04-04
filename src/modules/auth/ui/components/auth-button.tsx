"use client";
import { Button } from "@/components/ui/button";
import { UserButton, SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { ClapperboardIcon, UserCircleIcon, UserIcon } from "lucide-react";

export const AuthButton = () => {
  return (
    <>
      <SignedIn>
        <UserButton>
          <UserButton.MenuItems>
          <UserButton.Link
              label="My profile"
              href="/users/current"
              labelIcon={<UserIcon className="size-4"/>}
            />
            <UserButton.Link
              label="Studio"
              href="/studio"
              labelIcon={<ClapperboardIcon className="size-4"/>}
            />
          </UserButton.MenuItems>
        </UserButton>
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
          <Button
            variant="ghost"
            className="px-4 py-2 text-sm font-medium rounded-full shadow-none text-zinc-900 hover:text-zinc-700 "
          >
            <UserCircleIcon /> Sign In
          </Button>
        </SignInButton>
      </SignedOut>
    </>
  );
};
