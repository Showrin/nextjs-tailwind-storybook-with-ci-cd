import React from 'react';
import PropTypes from 'prop-types';

const CodeBlock = ({ children }) => {
  return (
    <pre className="static flex w-full justify-center whitespace-normal rounded-xl border border-gray-300 bg-gray-200 p-4 dark:bg-zinc-800/30 lg:w-auto">
      {children}
    </pre>
  );
};

CodeBlock.defaultProps = {
  children: null,
};

CodeBlock.propTypes = {
  children: PropTypes.node,
};

export default CodeBlock;
