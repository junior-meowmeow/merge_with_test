/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "node",
  transform: {
    "^.+\.tsx?$": ["ts-jest",{}],
  },
  testMatch: [
    '**/test/*.test.ts',  // Match files in the tests folder with .test.ts extension
  ],
};