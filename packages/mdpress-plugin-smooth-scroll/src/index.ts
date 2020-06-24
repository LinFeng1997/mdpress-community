import { Plugin } from "mdpress-types";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

const SmoothScrollPlugin: Plugin = {
  name: "mdpress-plugin-smooth-scroll",

  enhanceAppFiles: path.resolve(__dirname, "enhanceApp.js")
};

module.exports = SmoothScrollPlugin;
