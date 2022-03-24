module.exports = {
  "stories": [
    "../projects/stories/src/lib/readme/readme.stories.ts", //default story
    "../projects/stories/**/*.stories.mdx",
    "../projects/stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-essentials",
    '@storybook/addon-jest',
    '@storybook/addon-controls',
    "@storybook/addon-links",
    "storybook-addon-designs",
    //"storybook-addon-pseudo-states"
  ],
  "framework": "@storybook/angular",
  "core": {
    "builder": "webpack5"
  },
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    /*config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });*/

    // Return the altered config
    return config;
  },

}
