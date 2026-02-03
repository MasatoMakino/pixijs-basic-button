import { defineConfig } from "vitest/config";
import { webdriverio } from "@vitest/browser-webdriverio";

export default defineConfig({
  test: {
    browser: {
      enabled: true,
      provider: webdriverio(),
      headless: true,
      isolate: false,
      instances: [{ browser: "chrome" }],
    },
    coverage: {
      provider: "istanbul",
      reporter: ["text", "lcov"],
      include: ["src/**/*.ts"],
    },
  },
});
