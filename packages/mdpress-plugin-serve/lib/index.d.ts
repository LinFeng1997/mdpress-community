/// <reference types="node" />
import { Server } from "http";
import Express from "express";
import { ServeStaticOptions } from "serve-static";
export interface ServePluginOptions {
    /**
     * The name of the serve command
     */
    commandName?: string;
    /**
     * remove build mainfest files
     */
    removeMainfest?: boolean;
    /**
     * Path to not found page
     */
    notFoundPath?: string;
    /**
     * Hostname to serve
     */
    host?: string;
    /**
     * Port to serve
     */
    port?: number;
    /**
     * Options for serve-static
     */
    staticOptions?: ServeStaticOptions;
    /**
     * The hook to applied before server is ready
     */
    beforeServer?: (app: Express.Express, server: Server) => void | Promise<void>;
    /**
     * The hook to applied after server is ready
     */
    afterServer?: (app: Express.Express, server: Server) => void | Promise<void>;
}
