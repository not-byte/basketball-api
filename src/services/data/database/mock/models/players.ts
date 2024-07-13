import { Redis } from "ioredis";

const redis = new Redis({
    host: "redis",
    port: 6379,
});

const players = [
    {
        id: 1,
        team_id: 101,
        name: "John",
        lastname: "Doe",
        nationality: "USA",
        number: 23,
        height: 198,
        weight: 95,
        wingspan: 210,
        position: Position.SG,
        birth_date: new Date("1995-06-15"),
        starter: true,
    },
    {
        id: 2,
        team_id: 101,
        name: "David",
        lastname: "Brown",
        nationality: "CAN",
        number: 7,
        height: 185,
        weight: 80,
        wingspan: 195,
        position: Position.PG,
        birth_date: new Date("1990-03-10"),
        starter: true,
    },
    {
        id: 3,
        team_id: 101,
        name: "James",
        lastname: "Johnson",
        nationality: "USA",
        number: 12,
        height: 206,
        weight: 105,
        wingspan: 215,
        position: Position.PF,
        birth_date: new Date("1988-11-05"),
        starter: false,
    },
    {
        id: 4,
        team_id: 101,
        name: "Michael",
        lastname: "Smith",
        nationality: "USA",
        number: 30,
        height: 203,
        weight: 95,
        wingspan: 210,
        position: Position.SF,
        birth_date: new Date("1992-01-20"),
        starter: false,
    },
    {
        id: 5,
        team_id: 101,
        name: "Robert",
        lastname: "Williams",
        nationality: "USA",
        number: 22,
        height: 213,
        weight: 112,
        wingspan: 225,
        position: Position.C,
        birth_date: new Date("1997-08-25"),
        starter: true,
    },
    {
        id: 6,
        team_id: 101,
        name: "Chris",
        lastname: "Evans",
        nationality: "USA",
        number: 5,
        height: 193,
        weight: 88,
        wingspan: 200,
        position: Position.PG,
        birth_date: new Date("1996-04-10"),
        starter: true,
    },
    {
        id: 7,
        team_id: 101,
        name: "Paul",
        lastname: "Walker",
        nationality: "CAN",
        number: 3,
        height: 198,
        weight: 92,
        wingspan: 205,
        position: Position.SG,
        birth_date: new Date("1993-02-14"),
        starter: false,
    },
    {
        id: 8,
        team_id: 101,
        name: "Mark",
        lastname: "Harrison",
        nationality: "USA",
        number: 11,
        height: 206,
        weight: 100,
        wingspan: 210,
        position: Position.SF,
        birth_date: new Date("1989-12-25"),
        starter: true,
    },
    {
        id: 9,
        team_id: 101,
        name: "Steven",
        lastname: "Thompson",
        nationality: "USA",
        number: 8,
        height: 216,
        weight: 115,
        wingspan: 230,
        position: Position.C,
        birth_date: new Date("1998-09-09"),
        starter: false,
    },
    {
        id: 10,
        team_id: 101,
        name: "Kevin",
        lastname: "Garcia",
        nationality: "MEX",
        number: 2,
        height: 190,
        weight: 85,
        wingspan: 195,
        position: Position.PG,
        birth_date: new Date("1991-11-11"),
        starter: true,
    },
    {
        id: 11,
        team_id: 101,
        name: "Larry",
        lastname: "White",
        nationality: "USA",
        number: 14,
        height: 200,
        weight: 90,
        wingspan: 205,
        position: Position.SF,
        birth_date: new Date("1987-10-10"),
        starter: false,
    },
    {
        id: 12,
        team_id: 101,
        name: "Daniel",
        lastname: "Martinez",
        nationality: "ESP",
        number: 21,
        height: 203,
        weight: 97,
        wingspan: 210,
        position: Position.PF,
        birth_date: new Date("1994-07-17"),
        starter: true,
    },
    {
        id: 13,
        team_id: 102,
        name: "Anthony",
        lastname: "Jones",
        nationality: "USA",
        number: 24,
        height: 196,
        weight: 89,
        wingspan: 205,
        position: Position.SG,
        birth_date: new Date("1995-05-25"),
        starter: true,
    },
    {
        id: 14,
        team_id: 102,
        name: "Brian",
        lastname: "Miller",
        nationality: "CAN",
        number: 10,
        height: 182,
        weight: 77,
        wingspan: 190,
        position: Position.PG,
        birth_date: new Date("1991-02-14"),
        starter: true,
    },
    {
        id: 15,
        team_id: 102,
        name: "Charles",
        lastname: "Taylor",
        nationality: "USA",
        number: 13,
        height: 204,
        weight: 104,
        wingspan: 215,
        position: Position.PF,
        birth_date: new Date("1988-12-02"),
        starter: false,
    },
    {
        id: 16,
        team_id: 102,
        name: "Derek",
        lastname: "Anderson",
        nationality: "USA",
        number: 32,
        height: 201,
        weight: 94,
        wingspan: 210,
        position: Position.SF,
        birth_date: new Date("1992-03-20"),
        starter: false,
    },
    {
        id: 17,
        team_id: 102,
        name: "Eric",
        lastname: "Lee",
        nationality: "USA",
        number: 25,
        height: 214,
        weight: 113,
        wingspan: 225,
        position: Position.C,
        birth_date: new Date("1996-07-30"),
        starter: true,
    },
    {
        id: 18,
        team_id: 102,
        name: "Frank",
        lastname: "Wilson",
        nationality: "USA",
        number: 6,
        height: 194,
        weight: 87,
        wingspan: 200,
        position: Position.PG,
        birth_date: new Date("1996-05-18"),
        starter: true,
    },
    {
        id: 19,
        team_id: 102,
        name: "George",
        lastname: "Clark",
        nationality: "CAN",
        number: 4,
        height: 199,
        weight: 91,
        wingspan: 205,
        position: Position.SG,
        birth_date: new Date("1993-01-23"),
        starter: false,
    },
    {
        id: 20,
        team_id: 102,
        name: "Henry",
        lastname: "Lewis",
        nationality: "USA",
        number: 9,
        height: 207,
        weight: 101,
        wingspan: 210,
        position: Position.SF,
        birth_date: new Date("1989-11-25"),
        starter: true,
    },
    {
        id: 21,
        team_id: 102,
        name: "Ian",
        lastname: "Robinson",
        nationality: "USA",
        number: 11,
        height: 217,
        weight: 116,
        wingspan: 230,
        position: Position.C,
        birth_date: new Date("1998-10-11"),
        starter: false,
    },
    {
        id: 22,
        team_id: 102,
        name: "Jack",
        lastname: "Walker",
        nationality: "MEX",
        number: 3,
        height: 191,
        weight: 86,
        wingspan: 195,
        position: Position.PG,
        birth_date: new Date("1991-12-11"),
        starter: true,
    },
    {
        id: 23,
        team_id: 102,
        name: "Kyle",
        lastname: "Hall",
        nationality: "USA",
        number: 15,
        height: 202,
        weight: 91,
        wingspan: 205,
        position: Position.SF,
        birth_date: new Date("1987-11-20"),
        starter: false,
    },
    {
        id: 24,
        team_id: 102,
        name: "Luke",
        lastname: "Young",
        nationality: "ESP",
        number: 20,
        height: 204,
        weight: 98,
        wingspan: 210,
        position: Position.PF,
        birth_date: new Date("1994-06-27"),
        starter: true,
    },
];

void redis.set("players", JSON.stringify(players));

export const get = async <T>(): Promise<Array<T>> => {
    const data: Array<T> = JSON.parse(await redis.get("players") ?? "[]");

    return data.concat(data, data, data, data, data, data, data, data, data);
}

export const create = async (): Promise<void> => {};

export const update = async (): Promise<void> => {};

export const remove = async (): Promise<void> => {};
