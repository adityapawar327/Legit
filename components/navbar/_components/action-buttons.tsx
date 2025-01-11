"use client";

import React, { useState, useEffect } from "react";
import { usePrivy } from "@privy-io/react-auth";

import { Button } from "@/components/ui/button";
import { useWallets } from "@privy-io/react-auth";

import { X, AlignJustify } from 'lucide-react';
import Link from "next/link";
import DropdownMenu from "./drop-down-menu";
import { getUserByAddress } from "@/utils/queries";

const ActionButtons = () => {
  const { ready, authenticated, login, logout } = usePrivy();
  const disableLogin = !ready || (ready && authenticated);
  const { wallets } = useWallets();

  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [UserInfo, setUserInfo] = useState("");
  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
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

  console.log(UserInfo == "User does not exist.");
  console.log(authenticated);

  return (
    <div className="pr-4">
      <div className="items-center justify-center flex">
        <div className="flex xl:space-x-4">
          {authenticated && UserInfo !== "User does not exist." ? (
            <>
              <Link
                href={"/dashboard"}
                className="lg:flex items-center hidden border-2 border-black bg-lime-400 px-4 py-2 font-bold text-black hover:bg-yellow-400 transition-colors"
              >
                <div className="">Dashboard</div>
              </Link>
              <div className="font-thin lg:flex ml-4 mr-0 items-center hidden text-white">
                |
              </div>
            </>
          ) : authenticated && UserInfo == "User does not exist." ? (
            <>
              <Link
                href={"/onboard"}
                className="lg:flex items-center hidden border-2 border-black bg-lime-400 px-4 py-2 font-bold text-black hover:bg-yellow-400 transition-colors"
              >
                <div className="">Get DID</div>
              </Link>
              <div className="font-thin lg:flex ml-4 mr-0 items-center hidden text-white">
                |
              </div>
            </>
          ) : (
            ""
          )}
        </div>
        <div className="flex lg:space-x-2 items-center pr-4">
          <Link href={"/free"}>
            <Button
              variant={"ghost"}
              className="lg:flex items-center hidden bg-fuchsia-500 hover:bg-fuchsia-500 text-fuchsia-500 border-none p-0 m-0 w-0 h-0 overflow-hidden"
            ></Button>
          </Link>
          {authenticated ? (
            <Button className="hidden lg:block border-2 border-black bg-red-500 px-4 py-2 font-bold text-white hover:bg-yellow-400 hover:text-black transition-colors" onClick={logout}>
              Disconnect
            </Button>
          ) : (
            <Button className="hidden lg:block border-2 border-black bg-cyan-400 px-4 py-2 font-bold text-white hover:bg-yellow-400 hover:text-black transition-colors" onClick={login}>
              Connect
            </Button>
          )}
        </div>
      </div>

      {isDropdownVisible && (
        <div
          onClick={toggleDropdown}
          className="rounded-full xl:hidden text-white"
        >
          <X className="h-5 w-5 items-center justify-center rounded-full" />
        </div>
      )}
      {!isDropdownVisible && (
        <div onClick={toggleDropdown} className="flex lg:hidden text-white">
          <AlignJustify className="h-6 w-6 items-center justify-center mr-2" />
        </div>
      )}

      {isDropdownVisible && <DropdownMenu onClose={closeDropdown} />}
    </div>
  );
};

export default ActionButtons;

