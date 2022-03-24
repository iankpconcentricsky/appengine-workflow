import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "/documentation.json";
import { themes } from '@storybook/theming';
import { withTests } from '@storybook/addon-jest';

setCompodocJson(docJson);
import results from '../.jest-test-results.json';
import {addDecorator} from "@storybook/angular";

const customViewports = {
  mobile: {
    name: 'Mobile',
    styles: {
      width: '576px',
      height: '963px',
    },
  },
  tablet: {
    name: 'Tablet',
    styles: {
      width: '768px',
      height: '801px',
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: { inlineStories: true },
  darkMode: {
    // Override the default dark theme
    dark: { ...themes.dark, appBg: 'black' },
    // Override the default light theme
    light: { ...themes.normal, appBg: 'white' }
  },
  viewport: { viewports: customViewports },

}

addDecorator(
    withTests({
      results,
    })
);
