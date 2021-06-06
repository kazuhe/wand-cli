import fs from 'fs'
import os from 'os'
import { exec } from 'child_process'
import { question } from './modules/helper_readline'
import chalk from 'chalk'
import { help } from './help'

const TARGET_DIR = os.homedir() + '/wand/'

export const init = () => {
  // If the repository does not exist in the user's home directory
  if (!fs.existsSync(TARGET_DIR)) {
    question(chalk.green('? ') + 'repository URL').then((repositoryName) => {
      /**
       * Get repository.
       */
      exec(`git clone ${repositoryName} ${TARGET_DIR}`, (err) => {
        if (err) {
          console.error(
            chalk.red('\nfailure: ') + 'リポジトリのクローンに失敗しました\n'
          )
          throw new Error(err.toString())
        }

        fs.mkdir(`${TARGET_DIR}/_non_category`, (err) => {
          if (err) throw new Error(err.toString())
        })

        console.log(
          chalk.green('\nsuccess: ') +
            `🎉 "${repositoryName}"をクローンしました\n\nこれでWand CLIの初期設定が完了しました🧙✨\n下記のコマンドを入力してみてください`
        )
        help()
      })
    })
  } else {
    console.log(
      '\nWand CLIの初期設定は既に完了しています🧙✨\n下記のコマンドを入力してみてください'
    )
    help()
  }
}
