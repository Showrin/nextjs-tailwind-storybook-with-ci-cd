import React from 'react';
import PropTypes from 'prop-types';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const NavCard = ({ title, description, href }) => {
  return (
    <a
      href={href}
      className="group inline-block rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
        {title}{' '}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>
      <p className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}>{description}</p>
    </a>
  );
};

NavCard.defaultProps = {
  title: '',
  description: '',
  href: '',
};

NavCard.propTypes = {
  /**
   * Title to be shown in the card.
   */
  title: PropTypes.string,
  /**
   * Description to be shown in the card.
   */
  description: PropTypes.string,
  /**
   * URL of the page which users will be redirected to after clicking the card.
   */
  href: PropTypes.string,
};

export default NavCard;
