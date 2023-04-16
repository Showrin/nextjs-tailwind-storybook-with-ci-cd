/** @type { import('@storybook/nextjs').StorybookConfig } */
const path = require('path');

const config = {
  stories: ['../components/**/*.mdx', '../components/**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  core: {
    builder: 'webpack5',
  },
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
    });

    config.resolve.alias = {
      ...config.resolve?.alias,
      '@': [path.resolve(__dirname, '../')],
    };

    /**
     * Fixes font import with /
     * @see https://github.com/storybookjs/storybook/issues/12844#issuecomment-867544160
     */
    config.resolve.roots = [path.resolve(__dirname, '../public'), 'node_modules'];

    return config;
  },
};

export default config;
