import express, {Router} from "express"
import Monitor from "./Monitor"

class TweetStatsController {
    protected router: Router
    protected monitor: Monitor

    constructor(router: Router, monitor: Monitor) {
        this.router = router
        this.monitor = monitor
        this.config()
    }

    private config() {
        this.router.get('/tweet-stats',
            (_req, res) => {
                //res.send(this.monitor.getTweetStats())
                res.send('{"count":2395,"topHashtags":[["呪術廻戦",12],["กีฬาสีหมีนุช702",9],["เป๊กผลิตโชค",8],["StanWorld",6],["WandaVision",6]]}')
            })
    }
}

export function routes(monitor: Monitor): Router {
    const router: Router = express.Router()
    const tweetStatsController: TweetStatsController = new TweetStatsController(router, monitor)

    return router;
}
