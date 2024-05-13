/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import bodyParser = require('body-parser')
import { AppDataSource } from './data-source'
import * as express from 'express'
import { Routes } from './routes'
import { Request, Response } from 'express'

AppDataSource.initialize().then(async () => {
  const app = express()
  app.use(bodyParser.json())

  Routes.forEach((route) => {
    ;(app as any)[route.method](
      route.route,
      (req: Request, res: Response, next: Function) => {
        const result = new (route.controller as any)()[route.action](
          req,
          res,
          next,
        )
        if (result instanceof Promise) {
          result.then((result) =>
            result !== null && result !== undefined
              ? res.send(result)
              : undefined,
          )
        } else if (result !== null && result !== undefined) {
          res.json(result)
        }
      },
    )
  })

  app.listen(3000)

  console.log('Express server started on port 3000')
})
