var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { existsSync } = require("fs");
const { resolve } = require("path");
const express = require("express");
const chalk = require("chalk");
const opn = require("opn");
const ServePlugin = ({ commandName = "serve", notFoundPath = "404.html", host: optionHost, port: optionPort, staticOptions, beforeServer, afterServer, removeMainfest = true }, context) => ({
    name: "mdpress-plugin-serve",
    extendCli(cli) {
        cli
            .command(commandName, "serve generated files")
            .option("-b, --build", "build project before serving")
            .option("-p, --port <port>", "use specified port (default: 8080)")
            .option("-c, --cache [cache]", "set the directory of cache")
            .option("--dest <dest>", "the output directory for build process")
            .option("--no-cache", "clean the cache before build")
            .option("--host <host>", "use specified host (default: 0.0.0.0)")
            .option("--open", "open browser when ready")
            .allowUnknownOptions()
            .action((cliOptions) => __awaiter(this, void 0, void 0, function* () {
            // resolve the absolute path of not found file
            notFoundPath = resolve(context.outDir, notFoundPath);
            // build project first if there is no 404.html
            let has404 = existsSync(notFoundPath);
            // build project first if specified
            if (cliOptions.build || !has404) {
                process.env.NODE_ENV = "production";
                yield context.build(removeMainfest);
                has404 = existsSync(notFoundPath);
            }
            // ensure that a 404 file exists
            if (!has404) {
                throw new Error("No 404.html was found.");
            }
            // host and port priority: cli > options > siteConfig > default
            const { port = optionPort || context.siteConfig.port || 8080, host = optionHost || context.siteConfig.host || "localhost", } = cliOptions;
            // express instance
            const app = express();
            // create server
            const server = app.listen(port, host, () => __awaiter(this, void 0, void 0, function* () {
                // apply afterServer hook
                if (typeof afterServer === "function") {
                    yield afterServer(app, server);
                }
                const url = `http://${host}:${port}${context.base}`;
                console.log(`MdPress static files is listening at ${chalk.blue(url)}`);
                // open browser when ready
                if (cliOptions.open)
                    opn(url);
            }));
            // apply beforeServer hook
            if (typeof beforeServer === "function") {
                yield beforeServer(app, server);
            }
            // serve static files
            app.use(context.base, express.static(context.outDir, staticOptions));
            // fallback to base url
            app.get(/.*/, (req, res) => {
                if (req.path.startsWith(context.base)) {
                    res.sendFile(notFoundPath);
                }
                else {
                    res.redirect(context.base);
                }
            });
        }));
    },
});
module.exports = ServePlugin;
//# sourceMappingURL=index.js.map