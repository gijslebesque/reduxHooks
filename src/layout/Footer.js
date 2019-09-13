import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>Random WebApp</strong> by {}
          <a
            href="https://github.com/gijslebesque"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            Gijs
          </a>
          . The source code is licensed {}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://opensource.org/licenses/mit-license.php"
          >
            MIT
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
