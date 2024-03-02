/** @type {import('ts-jest').JestConfigWithTsJest} */

export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ["**/tests/(integrations)/**/*.[jt]s?(x)"],
  setupFilesAfterEnv: ["./src/tests/utils/clearDatabase.ts"]
};