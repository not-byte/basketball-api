import Config from "@/config/server";

import { NextFunction, Request, Response } from "express";

const headers: Record<string, string> = {
    "Content-Security-Policy":
        "default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests",
    "Cross-Origin-Opener-Policy": "same-origin",
    "Cross-Origin-Resource-Policy": "same-origin",
    "Origin-Agent-Cluster": "?1",
    "Referrer-Policy": "no-referrer",
    "Strict-Transport-Security": "max-age=15552000; includeSubDomains",
    "X-Content-Type-Options": "nosniff",
    "X-DNS-Prefetch-Control": "off",
    "X-Download-Options": "noopen",
    "X-Frame-Options": "SAMEORIGIN",
    "X-Permitted-Cross-Domain-Policies": "none",
    "X-XSS-Protection": "0",
    "Content-Type": "application/json",
};

export default (_request: Request, response: Response, next: NextFunction) => {
    Object.keys(headers)
        .filter((key: keyof typeof headers): boolean => !!headers[key])
        .forEach((key: keyof typeof headers): void => {
            response.setHeader(key, headers[key] as string);
        });

    if (new Config().getCompression()) {
        response.set("Content-Encoding", "gzip");
    }

    response.removeHeader("X-Powered-By");

    next();
};