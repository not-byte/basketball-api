import { getUrl, getExpireTime } from "@/config/types/cache";

import { Redis } from "ioredis";

BigInt.prototype.toJSON = function (): string {
    return this.toString();
};

const instance = new Redis(getUrl());

export const get = async <Model>(key: string): Promise<Model> =>
    JSON.parse(`${await instance.get(key)}`);

export const set = async <Model>(key: string, data: Model[]): Promise<"OK"> =>
    instance.set(key, JSON.stringify(data), "EX", getExpireTime());

export const clear = async (keys: string[]): Promise<number> =>
    instance.del(keys);

export default {
    get,
    set,
    clear,
};