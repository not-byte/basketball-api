import {Router} from 'express'
import {Player} from '../../../model/Player'
import {storage} from '../../../storage/Storage'
import player from './player/Player'

const router = Router()

router.get('', async (req, res) => {
    const { data: players, error } = await storage().players()

    if (!players || error) {
        console.log((error)
            ? `${new Date().toLocaleTimeString('pl-PL')} [storage] an ${error.code} error occurred (${error.message})`
            : `${new Date().toLocaleTimeString('pl-PL')} [storage] requested players are null`)
        return res.sendStatus(400)
    }

    res.send(players.map(player => new Player(player)))
    console.log(`${new Date().toLocaleTimeString('pl-PL')} [request] GET ${req.baseUrl + req.path} - requested players (${((performance.now() - res.locals.start) / 1000).toFixed(2)}s)`)
})

router.use('/filter', player)

export default router