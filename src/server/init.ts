import fs from 'fs'
import child_process from 'child_process'
import util from 'util'
import { question } from './utils/helper_readline'
import chalk from 'chalk'
import help from './help'

export default async (dirpath: string) => {
  const exec = util.promisify(child_process.exec)
  const gitOptions = `--git-dir=${dirpath}/.git --work-tree=${dirpath}`

  // If the repository does not exist in the user's home directory
  if (!fs.existsSync(dirpath)) {
    question(chalk.green('? ') + 'repository URL').then((repositoryName) => {
      const repository = /.*\.git$/.test(repositoryName)
        ? repositoryName
        : `${repositoryName}.git`

      exec(`git clone ${repository} ${dirpath}`)
        .then(() => exec(`git ${gitOptions} branch -M main`))
        .then(() => {
          console.log(
            chalk.green('\nsuccess: ') +
              `ð "${repository}"ãã¯ã­ã¼ã³ãã¾ãã\n\nããã§Wand CLIã®åæè¨­å®ãå®äºãã¾ããð§â¨\nä¸è¨ã®ã³ãã³ããè©¦ãã¦ãã ãã`
          )
          help()
        })
        .catch((err) => {
          if (err) {
            console.error(
              chalk.red('\nfailure: ') + 'ãªãã¸ããªã®ã¯ã­ã¼ã³ã«å¤±æãã¾ãã\n'
            )
            throw new Error(err.toString())
          }
        })
    })
  } else {
    console.log(
      '\nWand CLIã®åæè¨­å®ã¯æ¢ã«å®äºãã¦ãã¾ãð§â¨\nä¸è¨ã®ã³ãã³ããè©¦ãã¦ãã ãã'
    )
    help()
  }
}
