import { type Request, type Response } from 'express'
import storage from 'services/storage.service'
import sendData from 'utils/send.util'
import { League } from 'models/api/league.model'

export async function leagues(req: Request, res: Response): Promise<void> {
	const data: League[] = await storage('leagues')
	sendData(req, res, data)
}

export async function leaguesById(req: Request, res: Response): Promise<void> {
	const data: League[] = await storage('leagues', 'leaguesById', [BigInt(req.params.id)])
	sendData(req, res, data)
}
