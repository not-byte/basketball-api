import cockroachStorage from 'services/storage/cockroach.storage'
import QueryEnum from 'types/storage/query.enum'
import { TransactionSql } from 'postgres'
import { ArenaQuery } from 'types/basketball/arena.model'
import routes from 'utils/route.util'

export default async (key: string, query?: QueryEnum, parameter?: bigint): Promise<any[]> => {
	switch (query) {
		case QueryEnum.ID:
		case QueryEnum.CITY_ID: {
			return cockroachStorage()
				.begin(
					(sql: TransactionSql): Promise<ArenaQuery[]> => sql<ArenaQuery[]>`
					SELECT ${cockroachStorage()(routes[key])}.*
					FROM ${cockroachStorage()(routes[key])} 
					WHERE ${cockroachStorage()(query.toLowerCase())} = ${`${parameter}`}`
				)
				.catch(() => [])
		}
		case QueryEnum.NAME:
		case QueryEnum.TEAM_NAME:
		case QueryEnum.LOCATION: {
			return cockroachStorage()
				.begin(
					(sql: TransactionSql): Promise<ArenaQuery[]> => sql<ArenaQuery[]>`
					SELECT ${cockroachStorage()(routes[key])}.*
					FROM ${cockroachStorage()(routes[key])} 
					WHERE ${cockroachStorage()(query.toLowerCase())} ILIKE ${'%' + parameter + '%'}`
				)
				.catch(() => [])
		}
		default: {
			return cockroachStorage()
				.begin(
					(sql: TransactionSql): Promise<ArenaQuery[]> => sql<ArenaQuery[]>`
					SELECT ${cockroachStorage()(routes[key])}.*
					FROM ${cockroachStorage()(routes[key])}`
				)
				.catch(() => [])
		}
	}
}
