module.exports = {
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.test.json'
    }
  },
  testPathIgnorePatterns: ['/node_modules/'],
  testMatch: [
    '<rootDir>/test/**/*.(test|spec).ts?(x)',
    '<rootDir>/src/**/*.(test|spec).ts?(x)'
  ],
  moduleNameMapper: {
    '^@/(.*)': '<rootDir>/src/$1'
  }
}
