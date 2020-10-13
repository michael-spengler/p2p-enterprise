import { opine, serveStatic, json } from 'https://deno.land/x/opine/mod.ts'
import { opineCors } from 'https://deno.land/x/cors/mod.ts'
import { config } from 'https://deno.land/x/dotenv/mod.ts'
import { Logger } from 'https://x.nest.land/logger@1.0.0/mod.ts'

export const logger = await Logger.getInstance()

const pathToAppFile = `${Deno.cwd()}/client/dist/index.html`

const app: any = opine()

app.use(opineCors())
app.use(serveStatic('client/dist'))
app.use(json())

app.get('/', function(req: any, res: any): any {
    logger.debug(`sending file from ${pathToAppFile}`)
    res.sendFile(pathToAppFile)
})


startListening()

function startListening() {

    if (Number(config().httpPort) > 0) {
        logger.info(`listening on http port ${config().httpPort}`)
        logger.info(`listening on http port ${config().httpPort}`)
        app.listen(Number(config().httpPort))
    }

    if (Number(config().httpsPort) > 0) {
        logger.info(`listening on https port ${config().httpsPort}`)
        const httpsOptions = {
            port: Number(config().httpsPort),
            certFile: config().pathToCert,
            keyFile: config().pathToCertKey,
        }
        app.listen(httpsOptions)
    }
}
