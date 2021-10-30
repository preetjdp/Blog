import React from "react";

import Logo from "./Logo";
import Image from "next/image";
import { useRouter } from "next/router";
import Signup from "./Signup";

import Preet from "../public/assets/preet.jpg";

const Aside = () => {
  const router = useRouter();
  const isIndex = router.pathname === "/";

  return (
    <aside>
      {!isIndex && (
        <>
          <Signup />
          <div className="mb-7">
            <Logo />
          </div>
        </>
      )}
      <div className="flex mb-12 items-center text-base">
        <div className=" rounded-full">
          <Image
            src={Preet}
            alt="Al Joseph Condino"
            width={48}
            height={48}
            className=" rounded-full"
            quality={100}
            placeholder="blur"
          />
        </div>
        <p className="ml-3.5 max-w-xs">
          Personal blog by Preet Parekh.
          <span className="block">I&nbsp;explain with words and code.</span>
        </p>
      </div>
    </aside>
  );
};

export default Aside;
