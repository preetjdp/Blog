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
} from "kbar";
import { styled } from "@stitches/react";
import { whiteA, gray } from "@radix-ui/colors";
import { mauve } from "@radix-ui/colors";

interface CommandBarProps {
  children: React.ReactNode;
}

const actions = [
  {
    id: "homeAction",
    name: "Home",
    shortcut: ["h"],
    keywords: "back",
    section: "Navigation",
    // perform: () => history.push("/"),
    // icon: <HomeIcon />,
    subtitle: "Subtitles can help add more context.",
  },
  {
    id: "docsAction",
    name: "Docs",
    shortcut: ["g", "d"],
    keywords: "help",
    section: "Navigation",
    // perform: () => history.push("/docs"),
  },
  {
    id: "contactAction",
    name: "Contact",
    shortcut: ["c"],
    keywords: "email hello",
    section: "Navigation",
    perform: () => window.open("mailto:timchang@hey.com", "_blank"),
  },
  {
    id: "twitterAction",
    name: "Twitter",
    shortcut: ["t"],
    keywords: "social contact dm",
    section: "Navigation",
    perform: () => window.open("https://twitter.com/timcchang", "_blank"),
  },
  //   createAction({
  //     name: "Github",
  //     shortcut: ["g", "h"],
  //     keywords: "sourcecode",
  //     section: "Navigation",
  //     perform: () => window.open("https://github.com/timc1/kbar", "_blank"),
  //   }),
  {
    id: "theme",
    name: "Change theme…",
    shortcut: [],
    keywords: "interface color dark light",
    section: "Preferences",
    children: ["darkTheme", "lightTheme"],
  },
  {
    id: "darkTheme",
    name: "Dark",
    shortcut: [],
    keywords: "dark",
    section: "",
    perform: () => document.documentElement.setAttribute("data-theme-dark", ""),
    parent: "theme",
  },
  {
    id: "lightTheme",
    name: "Light",
    shortcut: [],
    keywords: "light",
    section: "",
    perform: () => document.documentElement.removeAttribute("data-theme-dark"),
    parent: "theme",
  },
];

// const searchStyle = {
//   padding: "12px 16px",
//   fontSize: "16px",
//   width: "100%",
//   boxSizing: "border-box" as React.CSSProperties["boxSizing"],
//   outline: "none",
//   border: "none",
//   background: "var(--background)",
//   color: "var(--foreground)",
// };

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
      onRender={({ item, active }) =>
        typeof item === "string" ? (
          <GroupNameDiv>{item}</GroupNameDiv>
        ) : (
          <ResultItem action={item} active={active} />
        )
      }
    />
  );
};

const GroupNameDiv = styled("div", {
  padding: "8px 16px",
  fontSize: "10px",
  textTransform: "uppercase" as const,
  opacity: 0.5,
  background: gray.gray2,
  color: "Black",
  fontFamily: "monospace",
});

const ResultItemWrapper = styled("div", {
  padding: "12px 16px",
  // background: active ? "var(--a1)" : "var(--background)",
  background: gray.gray10,
  borderLeft: `2px solid transparent`,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  cursor: "pointer",
  fontFamily: "monospace",
  color: gray.gray9,
  variants: {
    active: {
      true: {
        background: gray.gray4,
        borderLeft: `2px solid ${mauve.mauve1}`,
      },
    },
  },
});

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
      <ResultItemWrapper ref={ref} active>
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          {action.icon && action.icon}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span className="font-semibold text-lg">{action.name}</span>
            {action.subtitle && (
              <span style={{ fontSize: 12 }}>{action.subtitle}</span>
            )}
          </div>
        </div>
        {action.shortcut?.length ? (
          <div style={{ display: "grid", gridAutoFlow: "column", gap: "4px" }}>
            {action.shortcut.map((sc) => (
              <kbd
                key={sc}
                style={{
                  padding: "4px 6px",
                  background: "rgba(0 0 0 / .1)",
                  borderRadius: "4px",
                }}
              >
                {sc}
              </kbd>
            ))}
          </div>
        ) : null}
      </ResultItemWrapper>
    );
  }
);

const Animator = styled(KBarAnimator, {
  maxWidth: "600px",
  width: "100%",
  background: gray.gray2,
  borderRadius: "8px",
  overflow: "hidden",
  // boxShadow: whiteA.whiteA12,
  boxShadow: "0 16px 70px rgb(0 0 0 / 20%)",
});

const SearchBar = styled(KBarSearch, {
  padding: "12px 16px",
  fontSize: "16px",
  width: "100%",
  boxSizing: "border-box" as React.CSSProperties["boxSizing"],
  outline: "none",
  border: "none",
  background: whiteA.whiteA1,
  color: "Black",
  fontFamily: "monospace",
});

const CommandBar = (props: CommandBarProps) => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  (() => {})();
  return (
    <KBarProvider actions={actions}>
      <KBarPortal>
        <KBarPositioner>
          <Animator>
            <SearchBar placeholder="Search Blog ..." />
            <RenderResults />
          </Animator>
        </KBarPositioner>
      </KBarPortal>
      {props.children}
    </KBarProvider>
  );
};

export default CommandBar;
