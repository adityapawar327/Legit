"use client";
import React, { useState, useEffect } from "react";
import { useWallets } from "@privy-io/react-auth";
import { usePrivy } from "@privy-io/react-auth";

import { Button } from "@/components/ui/button";
import Link from "next/link";

import { Accordion } from "@/components/ui/accordion";

import { getUserByAddress } from "@/utils/queries";

interface DropDownMenuProps {
  onClose: () => void;
}

const DropdownMenu: React.FC<DropDownMenuProps> = ({ onClose }) => {
  const { ready, authenticated, login, logout } = usePrivy();
  const disableLogin = !ready || (ready && authenticated);
  const { wallets } = useWallets();
  const [UserInfo, setUserInfo] = useState("");

  const handleLinkClick = () => {
    onClose();
  };
  useEffect(() => {
    const getUserInfo = async () => {
      let userInfo = (await getUserByAddress(
        ready ? wallets[0]?.address : "0x0"
      )) as any;
      setUserInfo(userInfo);
    };

    getUserInfo();
  }, [ready, authenticated]);
  return (
    <div className="w-screen h-screen bg-fuchsia-500 px-2 items-center justify-center absolute right-0 xl:hidden border-l-4 border-black">
      <Accordion
        defaultValue="item-1"
        className="pl-2"
        type="single"
        collapsible
      >
        <Link
          href={"/"}
          className="flex flex-1 items-center justify-between mt-11 pt-2 py-4 border-b-4 border-black font-bold text-lg text-white"
        >
          Home
        </Link>

        <Link
          href={"/jobs"}
          className="flex flex-1 items-center justify-between border-b-4 border-black py-4 font-bold text-lg text-white"
        >
          Jobs
        </Link>

        <Link
          href={"/verify-identity"}
          className="flex flex-1 items-center justify-between py-4 border-b-4 border-black font-bold text-lg text-white"
        >
          Verify Identity
        </Link>
      </Accordion>

      <div className="pt-12">
        <div className="space-y-4 flex flex-col px-4">
          {authenticated && UserInfo !== "User does not exist." ? (
            <Link href={"/dashboard"}>
              <Button
                className="w-full border-4 border-black bg-lime-400 text-black font-bold text-lg py-6 hover:bg-yellow-400 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                Dashboard
              </Button>
            </Link>
          ) : authenticated && UserInfo == "User does not exist." ? (
            <Link href={"/onboard"}>
              <Button variant={"outline"} className="w-full border-4 border-black bg-lime-400 text-black font-bold text-lg py-6 hover:bg-yellow-400 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                Get DID
              </Button>
            </Link>
          ) : (
            ""
          )}
          {authenticated ? (
            <Button variant={"outline"} onClick={logout} className="w-full border-4 border-black bg-red-500 text-white font-bold text-lg py-6 hover:bg-yellow-400 hover:text-black transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              Disconnect
            </Button>
          ) : (
            <Button variant={"outline"} onClick={login} className="w-full border-4 border-black bg-cyan-400 text-black font-bold text-lg py-6 hover:bg-yellow-400 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              Connect
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;

