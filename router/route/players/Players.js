import express from 'express'
import storage from '../../../storage/Storage.js'
import player from '../player/Player.js'
import {Player} from '../../../model/Player.js'

const router = express.Router()

router.get('', async (req, res) => {
    const { data: players, error } = await storage.players()

    if (!players || error) {
        console.log((error) ?`[supabase] an ${error.code} error occurred (${error.message})` : '[supabase] requested players are null')
        return res.sendStatus(404)
    }

    res.send(players.map(player => new Player(player)))
    console.log(`[request] GET ${req.baseUrl + req.path} - requested players with ${((performance.now() - res.locals.start) / 1000).toFixed(2)}s`)
})

router.use('/filter', player)

export default router