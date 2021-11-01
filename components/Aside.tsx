import React from "react";

import Logo from "./Logo";
import Image from "next/image";
import { useRouter } from "next/router";
import Signup from "./Signup";

import Preet from "../public/assets/preet.jpg";
import { SimpleTooltip } from "./Tooltip";

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
      <div
        className="flex mb-12 items-center text-base py-16 px-5"
        style={{
          backgroundImage:
            "linear-gradient(319deg, rgb(251, 241, 253) 17%, rgba(255, 255, 255, 0) 58%), linear-gradient(34deg, rgb(236, 242, 180) 27%, rgba(255, 255, 255, 0) 71%), radial-gradient(at 2% 188%, rgb(241, 229, 106) 8%, rgba(255, 255, 255, 0) 80%), radial-gradient(at -46% -19%, rgb(29, 122, 79) 35%, rgba(255, 255, 255, 0) 62%), linear-gradient(212deg, rgb(239, 182, 52) 21%, rgba(255, 255, 255, 0) 53%), linear-gradient(328deg, rgb(155, 155, 155) 18%, rgba(255, 255, 255, 0) 60%);",
        }}
      >
        <div className="rounded-full self-start mt-2 sm:self-center sm:mt-0">
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
        <p className="ml-3.5 font-serif text-black text-lg flex flex-col whitespace-pre-wrap max-w-prose">
          <span>I'm Preet Parekh, a compulsive builder based in Bombay.</span>
          <span>
            Currently helping with Engineering at{" "}
            <SimpleTooltip
              tooltip={
                <span className="flex flex-row whitespace-nowrap">
                  <DevfolioLogo height={15} width={15} /> &nbsp; 🚀
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

/**
 * The Devfolio Logo
 */
export const DevfolioLogo = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 30 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M29.702 17.62a14.219 14.219 0 01-12.84 14.275s-9.218.236-12.268 0a3.186 3.186 0 01-2.557-1.928c.43.189.889.299 1.357.325.998.09 2.703.134 5.08.134 3.487 0 7.29-.1 7.323-.1h.067a14.97 14.97 0 009.88-4.924 15.7 15.7 0 003.958-8.657v.875z"
      fill="#3770FF"
    />
    <path
      d="M28.58 14.491a14.22 14.22 0 01-12.862 14.264s-9.218.236-12.268 0A3.432 3.432 0 01.545 25.28V3.557A3.432 3.432 0 013.517.115c3.062-.258 12.268 0 12.268 0A14.22 14.22 0 0128.581 14.49z"
      fill="#3770FF"
    />
  </svg>
);

export default Aside;
