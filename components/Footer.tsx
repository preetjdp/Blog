import React from "react";

/**
 * The Footer Component
 *
 * @returns JSX.Element
 */
const Footer = () => {
  return (
    <footer className="mt-18 pt-7 text-base flex justify-between">
      {/* <div>
        <a
          className="text-pink-700 dark:text-pink-300 shadow-link hover:shadow-none"
          href="https://twitter.com/TmPreet"
          target="_blank"
          rel="noopener noreferrer"
        >
          twitter
        </a>{" "}
        &bull;{" "}
        <a
          className="text-pink-700 dark:text-pink-300 shadow-link hover:shadow-none"
          href="https://github.com/preetjdp"
          target="_blank"
          rel="noopener noreferrer"
        >
          gh
        </a>{" "}
        &bull;{" "}
        <a
          className="text-pink-700 dark:text-pink-300 shadow-link hover:shadow-none justify-self-end"
          href="https://preetjdp.notion.site/Resume-914acc24c9de437991d3d43fbf289e41"
          target="_blank"
          rel="noopener noreferrer"
        >
          resume
        </a>{" "}
        &bull;{" "}
        <a
          className="text-pink-700 dark:text-pink-300 shadow-link hover:shadow-none"
          href="https://devfolio.co/@preetjdp"
          target="_blank"
          rel="noopener noreferrer"
        >
          devfolio
        </a>{" "}
      </div> */}
      <div>
        <a
          className="text-pink-700 dark:text-pink-300 shadow-link hover:shadow-none justify-self-end"
          href="https://preetjdp.dev/feed.xml"
          target="_blank"
          rel="noopener noreferrer"
        >
          rss
        </a>
      </div>
    </footer>
  );
};

export default Footer;
