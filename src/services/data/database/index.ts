import Config from "@/config/database";

import pg from "pg";

export default class Database {
    private readonly instance: pg.Pool;

    constructor() {
        this.instance = new pg.Pool(new Config().getUrl());
    }

    public get = (): Promise<pg.PoolClient> => {
        return this.instance.connect();
    };
}