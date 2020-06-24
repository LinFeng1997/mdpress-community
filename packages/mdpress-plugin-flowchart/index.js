const path = require("path");

module.exports = {
  name: "mdpress-plugin-flowchart",
  enhanceAppFiles: [path.resolve(__dirname, "./lib/client.js")],
};
