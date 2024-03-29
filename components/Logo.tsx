import React from "react";

import Link from "next/link";
import { useRouter } from "next/router";

/**
 * The Logo component
 *
 * @returns JSX.Element
 */
const Logo = () => {
  const router = useRouter();
  const isIndex = router.pathname === "/";
  const isNow = router.pathname === "/now";

  return isIndex ? (
    <h1 className="font-sans font-black">
      <Link href="/">
        <a className="text-xxl text-gray-900 tracking-wide dark:text-gray-200">
          Blog
        </a>
      </Link>
    </h1>
  ) : isNow ? (
    <h1 className="font-sans font-black">
      <Link href="/">
        <a className="text-xxl text-gray-900 tracking-wide dark:text-gray-200">
          Now
        </a>
      </Link>
    </h1>
  ) : (
    <h4 className="font-sans font-black">
      <Link href="/">
        <a className="text-xxl text-pink-600 dark:text-pink-300 leading-9">
          Blog
        </a>
      </Link>
    </h4>
  );
};

export default Logo;
