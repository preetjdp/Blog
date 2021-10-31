import React from "react";

import {
  KBarProvider,
  KBarPortal,
  KBarPositioner,
  KBarAnimator,
  KBarSearch,
  KBarResults,
  useMatches,
  Action,
  useKBar,
  createAction,
} from "kbar";
import { classNames } from "@/utils/helpers";
import { Tooltip, TooltipContent, TooltipTrigger } from "./Tooltip";

import { Command } from "react-feather";

import {
  TwitterLogoIcon,
  HomeIcon,
  GitHubLogoIcon,
  CrumpledPaperIcon,
  LightningBoltIcon,
} from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

interface CommandBarProps {
  children: React.ReactNode;
}

const actions = (toggleTheme): Action[] => {
  return [
    {
      id: "homeAction",
      name: "Home",
      shortcut: ["h"],
      keywords: "back",
      section: "Navigation",
      // perform: () => history.push("/"),
      icon: <HomeIcon />,
      subtitle: "Subtitles can help add more context.",
    },
    {
      id: "contactAction",
      name: "Contact",
      shortcut: ["c"],
      keywords: "email hello",
      section: "Navigation",
      icon: <CrumpledPaperIcon />,
      perform: () => window.open("mailto:hello@preetjdp.dev", "_blank"),
    },
    {
      id: "twitterAction",
      name: "Twitter",
      shortcut: ["t"],
      keywords: "social contact dm",
      section: "Social",
      icon: <TwitterLogoIcon />,
      perform: () => window.open("https://twitter.com/TmPreet", "_blank"),
    },
    createAction({
      name: "Github",
      shortcut: ["g", "h"],
      keywords: "sourcecode",
      section: "Social",
      icon: <GitHubLogoIcon />,
      perform: () => window.open("https://github.com/preetjdp", "_blank"),
    }),
    {
      id: "theme",
      name: "Change Theme",
      shortcut: [],
      keywords: "interface color dark light",
      section: "Preferences",
      icon: <LightningBoltIcon />,
      children: ["darkTheme", "lightTheme"],
    },
    {
      id: "darkTheme",
      name: "Dark",
      shortcut: [],
      keywords: "dark",
      section: "",
      perform: () => toggleTheme("dark"),
      parent: "theme",
    },
    {
      id: "lightTheme",
      name: "Light",
      shortcut: [],
      keywords: "light",
      section: "",
      perform: () => toggleTheme("light"),
      parent: "theme",
    },
  ];
};

/**
 * Returns the results for the Command Bar
 *
 * @returns JSX.Element
 */
const RenderResults = () => {
  const groups = useMatches();
  const flattened = React.useMemo(
    () =>
      groups.reduce((acc, curr) => {
        acc.push(curr.name);
        acc.push(...curr.actions);
        return acc;
      }, []),
    [groups]
  );

  return (
    <KBarResults
      items={flattened.filter((i) => i !== "none")}
      onRender={({ item, active }) => (
        <div className="px-2">
          {typeof item === "string" ? (
            <div className="py-4 text-xs uppercase opacity-50 font-mono">
              {item}
            </div>
          ) : (
            <ResultItem action={item} active={active} />
          )}
        </div>
      )}
    />
  );
};

// eslint-disable-next-line react/display-name
const ResultItem = React.forwardRef(
  (
    {
      action,
      active,
    }: {
      action: Action;
      active: boolean;
    },
    ref: React.Ref<HTMLDivElement>
  ) => {
    return (
      <div
        ref={ref}
        className={classNames(
          "px-3 py-4 flex align-middle justify-between cursor-pointer font-mono text-gray-700 opacity-80 rounded-md transition-colors duration-75  dark:text-white",
          active ? "bg-gray-200 dark:bg-gray-600" : "dark:bg-gray-custom-1"
        )}
      >
        <div className="flex gap-2 items-center">
          {action.icon && action.icon}
          <div className="flex flex-col ml-2">
            <span className="font-semibold text-lg">{action.name}</span>
            {action.subtitle && (
              <span className="text-xs">{action.subtitle}</span>
            )}
          </div>
        </div>
        {action.shortcut?.length ? (
          <div className="grid grid-flow-col gap-4 items-center">
            {action.shortcut.map((sc) => (
              <kbd
                key={sc}
                className="flex items-center justify-center p-2 bg-gray-300 rounded-sm font-bold text-xs min-h-3 min-w-3 dark:bg-gray-500"
              >
                {sc}
              </kbd>
            ))}
          </div>
        ) : null}
      </div>
    );
  }
);

const CommandBar = (props: CommandBarProps) => {
  const { setTheme } = useTheme();

  return (
    <KBarProvider actions={actions(setTheme)}>
      <KBarPortal>
        <KBarPositioner>
          <KBarAnimator className="max-w-xl w-full bg-gray-50 rounded-lg shadow-3xl overflow-hidden dark:bg-gray-custom-1">
            <KBarSearch
              placeholder="Search Blog ..."
              className="px-3 py-4 text-xl w-full box-border outline-none border-none bg-gray-50 font-mono dark:bg-gray-custom-1"
            />
            <div className="pb-2">
              <RenderResults />
            </div>
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
      {props.children}
    </KBarProvider>
  );
};

/**
 * The command bar toggle
 */
export const CommandBarToggle = () => {
  const { query } = useKBar();

  return (
    <Tooltip delayDuration={0}>
      <TooltipTrigger asChild onClick={() => query.toggle()}>
        <div className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
          <Command className="text-gray-custom-1 dark:text-white" />
        </div>
      </TooltipTrigger>
      <TooltipContent className="bg-gray-300 dark:bg-gray-500" sideOffset={10}>
        ⌘K
      </TooltipContent>
    </Tooltip>
  );
};

export default CommandBar;
