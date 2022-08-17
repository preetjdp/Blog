import React from "react";

import Image from "next/image";

import PreetImage from "../public/assets/preet.jpg";
import { SimpleTooltip } from "@/components/Tooltip";
import { DevfolioLogoBlue } from "@/components/DevfolioIcon";

const Aside = () => {
  return (
    <aside>
      <div
        className="flex mb-12 items-center text-base py-16 px-5 motion-safe:animate-gradient"
        style={{
          backgroundImage:
            "linear-gradient(319deg, rgb(251, 241, 253) 17%, rgba(255, 255, 255, 0) 58%), linear-gradient(34deg, rgb(236, 242, 180) 27%, rgba(255, 255, 255, 0) 71%), radial-gradient(at 2% 188%, rgb(241, 229, 106) 8%, rgba(255, 255, 255, 0) 80%), radial-gradient(at -46% -19%, rgb(29, 122, 79) 35%, rgba(255, 255, 255, 0) 62%), linear-gradient(212deg, rgb(239, 182, 52) 21%, rgba(255, 255, 255, 0) 53%), linear-gradient(328deg, rgb(155, 155, 155) 18%, rgba(255, 255, 255, 0) 60%",
        }}
      >
        <div className="rounded-full self-start mt-2 sm:self-center sm:mt-0">
          <Image
            src={PreetImage}
            alt="Preet Parekh"
            width={48}
            height={48}
            className=" rounded-full"
            quality={100}
            placeholder="blur"
          />
        </div>
        <p className="ml-3.5 font-serif text-black text-lg flex flex-col whitespace-pre-wrap max-w-prose">
          <span>I'm Preet Parekh, a compulsive builder based in Bombay.</span>
          <span>
            Currently helping with Engineering at{" "}
            <SimpleTooltip
              tooltip={
                <span className="flex flex-row whitespace-nowrap">
                  <DevfolioLogoBlue height={15} width={15} /> &nbsp; 🚀
                </span>
              }
            >
              Devfolio.
            </SimpleTooltip>
          </span>
        </p>
      </div>
    </aside>
  );
};

export default Aside;
