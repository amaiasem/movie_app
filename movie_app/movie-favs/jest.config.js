const { defaults } = require('jest-config')

module.exports = {
  roots: ['<rootDir>/src'],

  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.(js|jsx|ts|tsx)?$': 'babel-jest'
  },

  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$',

  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],

  transformIgnorePatterns: ['<rootDir>/node_modules/']
}
