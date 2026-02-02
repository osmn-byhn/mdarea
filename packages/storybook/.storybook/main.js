const path = require("path");

/** @type { import('@storybook/react-vite').StorybookConfig } */
module.exports = {
  framework: "@storybook/react-vite",
  stories: ["../stories/**/*.stories.@(ts|tsx)"],

  viteFinal: async (config) => {
    config.resolve = config.resolve || {};
    const rootPath = path.resolve(__dirname, "../../..");

    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "editor-react": path.resolve(rootPath, "packages/editor-react/src"),
      "editor-core": path.resolve(rootPath, "packages/editor-core"),
      "editor-parsers": path.resolve(rootPath, "packages/editor-parsers/src"),
      // Use ESM wrappers for CommonJS packages to handle interop
      "extend": path.resolve(__dirname, "extend-wrapper.js"),
      "debug": path.resolve(__dirname, "debug-wrapper.js"),
      "ms": path.resolve(__dirname, "ms-wrapper.js"),
    };

    // Ensure TypeScript files are resolved
    config.resolve.extensions = [
      ...(config.resolve.extensions || []),
      ".ts",
      ".tsx",
      ".js",
      ".cjs",
    ];

    // Configure dependency optimization for CommonJS packages
    config.optimizeDeps = config.optimizeDeps || {};

    // All problematic CommonJS packages are now handled via ESM wrappers
    config.optimizeDeps.exclude = [
      ...(config.optimizeDeps.exclude || []),
    ];

    // Configure esbuild to handle CommonJS dependencies properly
    config.optimizeDeps.esbuildOptions = {
      ...(config.optimizeDeps.esbuildOptions || {}),
      mainFields: ["module", "main"],
      platform: "browser",
    };

    return config;
  },
};
