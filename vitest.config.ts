import { defineConfig } from "vitest/config";
import { webdriverio } from "@vitest/browser-webdriverio";

export default defineConfig({
  test: {
    browser: {
      enabled: true,
      provider: webdriverio(),
      headless: true,
      isolate: false,
      instances: [
        {
          browser: "chrome",
          capabilities: {
            "goog:chromeOptions": {
              args: ["--use-gl=angle", "--use-angle=swiftshader"],
            },
          },
        },
      ],
    },
    coverage: {
      provider: "istanbul",
      reporter: ["text", "lcov"],
      include: ["src/**/*.ts"],
    },
  },
});
