import React from "react";

import "@/styles/globals.css";

import { MDXProvider } from "@mdx-js/react";
import { ThemeProvider } from "next-themes";

import MDXComponents from "@/components/MDXComponents";
import CommandBar from "@/components/CommandBar";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <MDXProvider components={MDXComponents}>
        <CommandBar>
          <Component {...pageProps} />
        </CommandBar>
      </MDXProvider>
    </ThemeProvider>
  );
}

export default MyApp;
