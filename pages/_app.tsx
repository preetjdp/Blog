import React, { useEffect } from "react";

import "@/styles/globals.css";

import { MDXProvider } from "@mdx-js/react";
import { ThemeProvider, useTheme } from "next-themes";

import MDXComponents from "@/components/MDXComponents";
import CommandBar from "@/components/CommandBar";

function MyApp({ Component, pageProps }) {
  const { theme } = useTheme();

  useEffect(() => {
    const isDarkTheme = theme === "dark";
    if (isDarkTheme) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }, [theme]);

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
