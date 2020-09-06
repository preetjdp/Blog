import React from 'react';

import { rhythm } from '../utils/typography';

const Footer = () => {
    return (
        <footer
            style={{
                marginTop: rhythm(2.5),
                paddingTop: rhythm(1),
            }}
        >
            <a
                href="mailto:hello@preetjdp.dev"
                target="_blank"
                rel="noopener noreferrer"
            >
                mail
        </a>{' '}
        &bull;{' '}
            <a
                href="https://github.com/preetjdp"
                target="_blank"
                rel="noopener noreferrer"
            >
                github
        </a>
        &bull;{' '}
            <a
                href="https://www.notion.so/preetjdp/Resume-914acc24c9de437991d3d43fbf289e41"
                target="_blank"
                rel="noopener noreferrer"
            >
                resume
        </a>
        &bull;{' '}
            <a
                href="https://notion.preetjdp.dev"
                target="_blank"
                rel="noopener noreferrer"
            >
                notion
        </a>
        </footer>
    );
}

export default Footer;