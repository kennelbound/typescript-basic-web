import App from './app'

import * as express from 'express'
import loggerMiddleware from './middleware/logger'

import HomeController from './controllers/home.controller'

const app = new App({
    port: 5000,
    controllers: [
        new HomeController(),
    ],
    middleWares: [
        express.json(),
        express.urlencoded({ extended: true }),
        loggerMiddleware
    ]
})

app.listen()

export default app;