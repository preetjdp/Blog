import React from "react";

import Logo from "./Logo";
import Toggle from "./Toggle";
import { CommandBarToggle } from "./CommandBar";

const Header = () => {
  return (
    <header className="flex justify-between items-center mb-10">
      <Logo />
      <CommandBarToggle />
      {/* <Toggle /> */}
      {/* {theme === undefined ? null : <Toggle />} */}
    </header>
  );
};

export default Header;
