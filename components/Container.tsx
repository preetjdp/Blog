import React from "react";
import CommandBar from "./CommandBar";

interface ContainerProps {
  children: React.ReactNode;
}

/**
 * The container for all the pages
 *
 * @param props The props for the page
 * @returns JSX.Element
 */
const Container = (props: ContainerProps) => {
  return (
    <CommandBar>
      <div className="bg-gray-50 dark:bg-gray-custom-1 text-gray-900 dark:text-gray-200 min-h-screen font-serif">
        <div className="max-w-2xl mx-auto py-10 px-6">{props.children}</div>
      </div>
    </CommandBar>
  );
};

export default Container;
