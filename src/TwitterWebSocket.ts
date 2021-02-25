
import express, {Router} from "express"
import Monitor from "./Monitor"
import WebSocket from "ws";

class TwitterWebSocket {
    protected router: Router
    protected monitor: Monitor

    constructor(router: Router, monitor: Monitor) {
        this.router = router
        this.monitor = monitor
        this.config()
    }

    private config() {
        const ws = new WebSocket.Server({port: 8080 });
        ws.on('connection', (ws) => {
            // not expecting a message, however should consume it
            //
            ws.on('message', function incoming(message) {
                console.log('received: %s', message);
            });
            setInterval(() => {
                ws.send(JSON.stringify(this.monitor.getTweetStats()))
            }, 5000);
        }); 
    }
}

export function connectTwitterWebSocket(monitor: Monitor): Router {
    const router: Router = express.Router()
    const tweetStatsController: TwitterWebSocket = new TwitterWebSocket(router, monitor)

    return router;
}
