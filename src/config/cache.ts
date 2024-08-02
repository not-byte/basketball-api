import Config from "@/config";

export default class Cache extends Config {
    private readonly DEFAULT: ConfigType.Cache;

    constructor() {
        const DEFAULT: ConfigType.Cache = {
            host: "redis",
            port: 6379,
            user: "default",
        };

        super("cache", DEFAULT);

        this.DEFAULT = DEFAULT;
    }

    public get = (): ConfigType.Cache => {
        return {
            host: this.getHost(),
            port: this.getPort(),
            user: this.getUser(),
        };
    };

    public getHost = (): string => {
        return process.env.CACHE_HOST ?? this.DEFAULT.host;
    };

    public getPort = (): number => {
        return parseInt(process.env.CACHE_PORT ?? `${this.DEFAULT.port}`);
    };

    public getUser = (): string => {
        return process.env.CACHE_USER ?? this.DEFAULT.user;
    };
}