import { TeamQuery } from 'models/basketball/team.model'

export const teamsById = (data: TeamQuery[], [id]): TeamQuery[] =>
	data.filter((team: TeamQuery): boolean => BigInt(team.id) === id)

export const teamsByName = (data: TeamQuery[], [name]): TeamQuery[] =>
	data.filter((team: TeamQuery): boolean => team.name.toLowerCase().includes(name.toLowerCase()))

export const teamsByCityId = (data: TeamQuery[], [id]): TeamQuery[] =>
	data.filter((team: TeamQuery): boolean => BigInt(team.city_id) === id)