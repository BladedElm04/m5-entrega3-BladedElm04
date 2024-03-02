/** @type {import('ts-jest').JestConfigWithTsJest} */

export default {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ["**/tests/(units)/**/*.[jt]s?(x)"],
    setupFilesAfterEnv: ["./src/tests/mocks/prisma.ts"]
  };