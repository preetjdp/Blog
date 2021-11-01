import React from "react";

import "@/styles/globals.css";

import { MDXProvider } from "@mdx-js/react";
import { ThemeProvider } from "next-themes";

import MDXComponents from "@/components/MDXComponents";

function MyApp({ Component, pageProps }) {
  // const { theme } = useTheme();

  // useEffect(() => {
  //   const isDarkTheme = theme === "dark";
  //   if (isDarkTheme) {
  //     document.body.classList.add("dark-theme");
  //   } else {
  //     document.body.classList.remove("dark-theme");
  //   }
  // }, [theme]);

  return (
    <ThemeProvider attribute="class">
      <MDXProvider components={MDXComponents}>
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  );
}

export default MyApp;
