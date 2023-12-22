import QueryEnum from 'types/storage/query.enum'

export default (query: QueryEnum, data: any[], parameter: string): any[] => {
	switch (query) {
		case QueryEnum.ID:
		case QueryEnum.CITY_ID: {
			return data.filter((element): boolean =>
				element[query.toLowerCase()]
					? BigInt(element[query.toLowerCase()]) === BigInt(parameter)
					: false
			)
		}
		case QueryEnum.NAME:
		case QueryEnum.TEAM_NAME: {
			return data.filter((element): boolean =>
				element[query.toLowerCase()]
					? element[query.toLowerCase()].includes(parameter)
					: false
			)
		}
		default: {
			return data
		}
	}
}
