import {type Request, type Response} from 'express'
import defaultConfig from 'configs/default.config'
import compressUtil from 'utils/compress.util'
import Compression from 'types/compression.enum'

export default function (req: Request, res: Response): void {
	const data: { data: any[] } = {
		data: res.locals.data
	}

	if (!data.data || !Array.isArray(data.data) || data.data.length === 0) {
		res.sendStatus(204)
		return
	}

	console.log(
		`${new Date().toLocaleTimeString('pl-PL')} [request] ${req.method} ${decodeURI(
			req.baseUrl + req.path
		)} (${((performance.now() - res.locals.start) / 1000).toFixed(2)}s)`
	)

	res.set('Cache-Control', `max-age=${defaultConfig.cacheTime}`)

	if (!defaultConfig.useCompression || defaultConfig.useCompression === Compression.NONE) {
		res.json(data)
		return
	}

	void compressUtil(res, data)
}
