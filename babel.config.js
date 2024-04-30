module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    [
      "@babel/preset-env",
      {
        "targets": "> 0.25%, not dead" // or specify specific environments
      }
    ]
  ],
  plugins: [
    '@babel/plugin-transform-private-methods'
  ]
}

