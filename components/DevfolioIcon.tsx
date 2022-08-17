import { IconProps } from "@radix-ui/react-icons/dist/types";
import React from "react";

// eslint-disable-next-line react/display-name
export const DevfolioLogoIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, forwardedRef) => {
    return (
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M5 12.9688H6.875C11.5625 12.9688 13.125 10.2632 13.125 8.125M3.4625 10.625H6.875C9.34575 10.625 11.0938 9.37864 11.0938 6.90789V5.78947C11.0938 3.31873 9.34575 1.25 6.875 1.25H3.4625C2.84481 1.25 2.34375 1.81652 2.34375 2.43421V9.6375C2.34375 10.2552 2.84481 10.625 3.4625 10.625Z"
          stroke={color}
          strokeWidth="1.5"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

/**
 * The Devfolio Logo
 */
export const DevfolioLogoBlue = (
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
