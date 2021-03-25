module.exports = {
  preset: 'ts-jest',
  roots: ['<rootDir>'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],
  testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ],
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js'
  }
}
