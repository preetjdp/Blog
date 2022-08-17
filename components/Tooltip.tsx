import React from "react";

import { styled, keyframes } from "@stitches/react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

const slideUpAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideRightAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(-2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const slideDownAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(-2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideLeftAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const StyledContent = styled(TooltipPrimitive.Content, {
  borderRadius: 4,
  padding: "10px 15px",
  fontSize: 15,
  lineHeight: 1,
  fontFamily: "sans-serif",
  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  "@media (prefers-reduced-motion: no-preference)": {
    animationDuration: "400ms",
    animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
    willChange: "transform, opacity",
    '&[data-state="delayed-open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },
});

const StyledArrow = styled(TooltipPrimitive.Arrow, {
  fill: "white",
});

// Exports
export const TooltipProvider = TooltipPrimitive.Provider;
export const Tooltip = TooltipPrimitive.Root;
export const TooltipTrigger = TooltipPrimitive.Trigger;
export const TooltipContent = StyledContent;
export const TooltipArrow = StyledArrow;

interface TextTooltipProps {
  tooltip: React.ReactNode | string;
  children: React.ReactNode;

  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  asChild?: boolean;
}

/**
 * The simple tooltip, that can be used for text tooltips
 *
 * @param props The props for the SimpleTooltip
 * @returns JSX.Element
 */
export const SimpleTooltip = (props: TextTooltipProps) => {
  return (
    <Tooltip delayDuration={0}>
      <TooltipTrigger
        className="appearance-none"
        asChild={props.asChild}
        onClick={props.onClick}
      >
        <div className="">{props.children}</div>
      </TooltipTrigger>
      <TooltipContent
        className="bg-gray-100 dark:bg-gray-custom-1 border-1 border-solid border-black dark:border-white"
        sideOffset={0}
      >
        {props.tooltip}
      </TooltipContent>
    </Tooltip>
  );
};
