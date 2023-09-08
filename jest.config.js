import { defaults } from "jest-config";

/** @type {import('ts-jest').JestConfigWithTsJest} */
const config = {
  testEnvironment: "jest-environment-jsdom",
  extensionsToTreatAsEsm: [".ts"],
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
  transform: {
    "^.+\\.[tj]sx?$": ["ts-jest", { useESM: true }],
  },
  coveragePathIgnorePatterns: [
    ...defaults.coveragePathIgnorePatterns,
    "__test__",
  ],
  setupFilesAfterEnv: ["<rootDir>/__test__/SetupFile.ts"],
};
export default config;
