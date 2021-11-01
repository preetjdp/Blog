import React from "react";

import Logo from "./Logo";
import { CommandBarToggle } from "./CommandBar";

const Header = () => {
  return (
    <header className="flex justify-between items-center mb-10">
      <Logo />
      <CommandBarToggle />
    </header>
  );
};

export default Header;
