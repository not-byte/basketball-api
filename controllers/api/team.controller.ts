import { type Request, type Response } from 'express'
import storage from 'services/storage.service'
import sendData from 'utils/send.util'
import { Team } from 'models/api/team.model'

export async function teams(req: Request, res: Response): Promise<void> {
	const data: Team[] = await storage('teams')
	sendData(req, res, data)
}

export async function teamsById(req: Request, res: Response): Promise<void> {
	const data: Team[] = await storage('teams', 'teamsById', [BigInt(req.params.id || 0)])
	sendData(req, res, data)
}

export async function teamsByName(req: Request, res: Response): Promise<void> {
	const data: Team[] = await storage('teams', 'teamsByName', [req.params.name])
	sendData(req, res, data)
}

export async function teamsByCityId(req: Request, res: Response): Promise<void> {
	const data: Team[] = await storage('teams', 'teamsByCityId', [BigInt(req.params.id || 0)])
	sendData(req, res, data)
}
