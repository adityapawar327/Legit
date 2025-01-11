"use client";

import React, { useState, useEffect } from "react";
import ActionButtons from "./_components/action-buttons";
import Logo from "./_components/logo";
import { Menu } from "./_components/menu";

const Navbar = () => {
  const navbarClasses = `
    flex items-center justify-between space-x-10 bg-fuchsia-500 h-16
    sticky top-0 z-50 border-b-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
  `;

  return (
    <div className={navbarClasses}>
      <div className="flex items-center justify-center">
        <Logo />
        <Menu />
      </div>
      <ActionButtons />
    </div>
  );
};

export default Navbar;


