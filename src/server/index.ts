import { getConfig } from "@/config/server";
import router from "@/server/router";

import { createServer, Server as HttpServer } from "node:http";

import express from "express";

export class Server {
    private readonly server: HttpServer;

    constructor() {
        const api: express.Express = express().use(
            `/v${getConfig().VERSION}`,
            router,
        );

        this.server = createServer(api);
    }

    public start(config: Config.Server = getConfig()): void {
        this.server.listen(config.PORT, config.HOST, (): void => {
            console.log(`Listening on http://${config.HOST}:${config.PORT}/`);
        });
    }
}