import React, { useEffect } from "react";

import { NextRouter, useRouter } from "next/router";
import { useTheme } from "next-themes";
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
  ActionId,
  ActionImpl,
} from "kbar";
import {
  TwitterLogoIcon,
  HomeIcon,
  GitHubLogoIcon,
  CrumpledPaperIcon,
  LightningBoltIcon,
  ArrowLeftIcon,
  TimerIcon,
  GlobeIcon,
} from "@radix-ui/react-icons";
import { Command } from "react-feather";

import { classNames } from "@/utils/helpers";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/Tooltip";
import { DevfolioLogoIcon } from "./DevfolioIcon";

interface CommandBarProps {
  children: React.ReactNode;
}

const actions = (
  toggleTheme: (theme: string) => void,
  router: NextRouter
): Action[] => {
  const actions: Action[] = [
    {
      id: "homeAction",
      name: "Home",
      shortcut: ["h"],
      keywords: "back",
      section: "Navigation",
      perform: () => router.push("/"),
      icon: <HomeIcon />,
    },
    {
      id: "nowAction",
      name: "Now",
      shortcut: ["n"],
      keywords: "now",
      section: "Navigation",
      perform: () => router.push("/now"),
      icon: <TimerIcon />,
    },
    {
      id: "treasureIcon",
      name: "Treasure",
      keywords: "treasure",
      section: "Navigation",
      icon: <GlobeIcon />,
      perform: () => window.open("https://treasure.preetjdp.dev", "_blank"),
    },
    {
      id: "contactAction",
      name: "Contact",
      shortcut: ["c"],
      keywords: "email hello",
      section: "Social",
      icon: <CrumpledPaperIcon />,
      perform: () => window.open("mailto:hello@pre.et", "_blank"),
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
      id: "devfolioAction",
      name: "Devfolio",
      shortcut: ["d", "e", "v"],
      keywords: "devfolio",
      section: "Social",
      icon: <DevfolioLogoIcon />,
      perform: () => window.open("https://devfolio.co/@preetjdp", "_blank"),
    },
    {
      id: "theme",
      name: "Change Theme",
      shortcut: [],
      keywords: "interface color dark light",
      section: "Preferences",
      icon: <LightningBoltIcon />,
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

  if (router.pathname !== "/") {
    actions.push({
      id: "backAction",
      name: "Back",
      shortcut: ["b"],
      keywords: "go back last page",
      section: "Navigation",
      perform: () => router.back(),
      icon: <ArrowLeftIcon />,
    });
  }

  return actions;
};

/**
 * Returns the results for the Command Bar
 *
 * @returns JSX.Element
 */
function RenderResults() {
  const { results, rootActionId } = useMatches();

  if (results.length === 0) {
    return <></>;
  }

  return (
    <div className="pb-4">
      <KBarResults
        items={results}
        onRender={({ item, active }) => (
          <div className="px-4">
            {typeof item === "string" ? (
              <div className="py-4 text-xs uppercase opacity-50 font-mono">
                {item}
              </div>
            ) : (
              <ResultItem
                action={item}
                active={active}
                currentRootActionId={rootActionId}
              />
            )}
          </div>
        )}
      />
    </div>
  );
}

// eslint-disable-next-line react/display-name
const ResultItem = React.forwardRef(
  (
    {
      action,
      active,
      currentRootActionId,
    }: {
      action: ActionImpl;
      active: boolean;
      currentRootActionId: ActionId;
    },
    ref: React.Ref<HTMLDivElement>
  ) => {
    const ancestors = React.useMemo(() => {
      if (!currentRootActionId) return action.ancestors;
      const index = action.ancestors.findIndex(
        (ancestor) => ancestor.id === currentRootActionId
      );
      // +1 removes the currentRootAction; e.g.
      // if we are on the "Set theme" parent action,
      // the UI should not display "Set theme… > Dark"
      // but rather just "Dark"
      return action.ancestors.slice(index + 1);
    }, [action.ancestors, currentRootActionId]);

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

/**
 * The command bar component
 *
 * @param props The command-bar props
 * @returns JSX.Element
 */
const CommandBar = (props: CommandBarProps) => {
  const { setTheme } = useTheme();
  const router = useRouter();

  return (
    <KBarProvider
      actions={actions(setTheme, router)}
      options={{ enableHistory: true }}
    >
      <KBarPortal>
        <KBarPositioner className="items-end p-0 md:items-center">
          <KBarAnimator className="max-w-xl w-full bg-gray-50 rounded-lg shadow-3xl overflow-hidden dark:bg-gray-custom-1 lg:m-12">
            <KBarSearch
              placeholder="Search through Preet"
              className="px-4 py-4 text-xl w-full box-border outline-none border-none bg-gray-50 font-mono dark:bg-gray-custom-1"
            />
            <RenderResults />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
      {props.children}
    </KBarProvider>
  );
};

/**
 * The command bar toggle
 *
 * @returns JSX.Element
 */
export const CommandBarToggle = () => {
  const { query } = useKBar();

  return (
    <Tooltip delayDuration={0}>
      <TooltipTrigger
        className="appearance-none"
        asChild
        onClick={() => query.toggle()}
      >
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
