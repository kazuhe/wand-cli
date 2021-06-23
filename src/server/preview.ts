import express from 'express'
import next from 'next'
import chalk from 'chalk'

export default async () => {
  const port = 3000
  const dev = process.env.NODE_ENV !== 'production'
  const nextApp = next({ dev, dir: `${__dirname}/../src/client/` })
  const handle = nextApp.getRequestHandler()

  await nextApp.prepare().then(() => {
    const app = express()

    app.get('*', (req, res) => {
      return handle(req, res)
    })

    app.listen(port, () => {
      console.log(
        chalk.green('\nsuccess: ') +
          `👀 "http://localhost:${port}" にアクセスしてください\n`
      )
    })
  })
}
