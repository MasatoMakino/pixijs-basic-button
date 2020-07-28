const { defaults } = require("jest-config");

module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFiles: ["jest-canvas-mock"],
  coveragePathIgnorePatterns: [
    ...defaults.coveragePathIgnorePatterns,
    "__test__",
  ],
};
