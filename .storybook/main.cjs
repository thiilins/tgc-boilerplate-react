const { mergeConfig } = require('vite')
const { default: tsconfigPaths } = require('vite-tsconfig-paths')
module.exports = {
  stories: ['../src/**/stories.mdx', '../src/**/stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-dark-mode'
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite'
  },
  staticDirs: ['../public'],
  features: {
    storyStoreV7: true
  },

  async viteFinal(config) {
    // Merge custom configuration into the default config
    return mergeConfig(config, {
      plugins: [tsconfigPaths()],
      optimizeDeps: {
        include: ['storybook-dark-mode']
      }
    })
  }
}
