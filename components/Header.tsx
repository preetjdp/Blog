import React from "react";

import Logo from "@/components/Logo";
import { CommandBarToggle } from "./CommandBar";

/**
 * The header component
 *
 * @returns JSX.Element
 */
const Header = () => {
  return (
    <header className="flex justify-between items-center mb-10">
      <Logo />
      <CommandBarToggle />
    </header>
  );
};

export default Header;
