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
        </footer>
    );
}

export default Footer;