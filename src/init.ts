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
              `🎉 "${repository}"をクローンしました\n\nこれでWand CLIの初期設定が完了しました🧙✨\n下記のコマンドを試してください`
          )
          help()
        })
        .catch((err) => {
          if (err) {
            console.error(
              chalk.red('\nfailure: ') + 'リポジトリのクローンに失敗しました\n'
            )
            throw new Error(err.toString())
          }
        })
    })
  } else {
    console.log(
      '\nWand CLIの初期設定は既に完了しています🧙✨\n下記のコマンドを試してください'
    )
    help()
  }
}
