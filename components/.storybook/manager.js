import '../src/styles/fontStyles.css';
import { addons } from '@storybook/addons';
import ddsTheme from './ddsTheme';

addons.setConfig({
  theme: ddsTheme
});
