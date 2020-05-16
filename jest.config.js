module.exports = {
  preset: 'ts-jest',
  clearMocks: true,
  testEnvironment: 'node',
  testMatch: [
    "**/__tests__/**/*.test.ts?(x)",
  ],
  verbose: true,
};