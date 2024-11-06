import config from "@/config";
import logger from "@/utils/logger";
import {
    getAddress,
    getEnvironment,
    getHttp,
    getVersion,
} from "@/config/types/server";

import cluster from "node:cluster";
import { createServer, Server as HttpServer } from "node:http";
import { cpus } from "node:os";

const close = (server: HttpServer): void => {
    logger.info(getAddress().host, ["LISTEN", "Closing API server"]);

    server.close((err: Error | undefined): void => {
        logger.info(getAddress().host, ["LISTEN", "Stopped API server"]);

        process.exit(err ? 1 : 0);
    });
};

export const listen = (server: HttpServer): void => {
    if (server.listening) {
        return;
    }

    process.on("SIGINT", () => close(server));
    process.on("SIGTERM", () => close(server));
    process.on("uncaughtException", (error: Error): void => {
        logger.error(getAddress().host, [error.stack as string]);
        // TODO
        // Exit request
    });

    server.listen(getAddress().port, getAddress().host);
};

export const start = async (): Promise<void> => {
    await config;

    if (cluster.isWorker) {
        const server: HttpServer = createServer(
            (await import("@/server/router")).default,
        );

        Object.entries(getHttp()).forEach(([key, value]) => {
            (server as any)[key] = value;
        });

        return listen(server);
    }

    logger.info(getAddress().host, [
        "LISTEN",
        `Started API server on http://${getAddress().host}:${getAddress().port}/v${getVersion()}`,
    ]);

    if (getEnvironment() === "development") {
        const server: HttpServer = createServer(
            (await import("@/server/router")).default,
        );

        await (
            await import("@/services/data/models/user")
        ).remove("024f0cef-70fb-4bd8-877b-7a4dbe2e432f");

        return listen(server);
    }

    for (let i = 0; i < cpus().length; i++) {
        cluster.fork();
    }

    cluster.on("exit", (_) => cluster.fork());
};

export default start;
