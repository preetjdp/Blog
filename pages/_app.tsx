import React from "react";

import "@/styles/globals.css";

import { MDXProvider } from "@mdx-js/react";
import { ThemeProvider } from "next-themes";

import MDXComponents from "@/components/MDXComponents";
import { TooltipProvider } from "@/components/Tooltip";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <MDXProvider components={MDXComponents}>
        <TooltipProvider>
          <Component {...pageProps} />
        </TooltipProvider>
      </MDXProvider>
    </ThemeProvider>
  );
}

export default MyApp;
