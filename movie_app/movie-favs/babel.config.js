module.exports = function () {
  return {
    presets: ['@babel/preset-env', '@babel/preset-react', 'react-app'],
    plugins: [
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      '@babel/plugin-syntax-jsx',
      '@babel/plugin-syntax-flow'
    ]

  }
}
