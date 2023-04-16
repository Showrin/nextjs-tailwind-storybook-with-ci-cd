import { addons } from '@storybook/manager-api';
import appTheme from './appTheme';

addons.setConfig({
  theme: appTheme,
});
