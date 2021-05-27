import fs from 'fs'
import os from 'os'
import { exec } from 'child_process'
// import marked from 'marked'
import { question } from './modules/helper_readline'
import chalk from 'chalk'
import { help } from './help'

const TARGET_DIR = os.homedir() + '/wand/'

export const init = () => {
  // If the repository does not exist in the user's home directory
  if (!fs.existsSync(TARGET_DIR)) {
    question(chalk.green('? ') + 'What is the repository URL? >').then(
      (repositoryName) => {
        /**
         * Get repository.
         */
        exec(`git clone ${repositoryName} ${TARGET_DIR}`, (error) => {
          if (error) {
            console.error(chalk.red('\nfailed') + ' Repository clone failed\n')
            throw new Error(error.toString())
          }
          console.log(
            chalk.green('\nsuccess') +
              ` 🎉 Clone repository! ${repositoryName}\n\nWand CLI has started 🧙✨\nLet's make a memo!`
          )
        })
      }
    )
  } else {
    console.log(
      "Initial setting is already completed 🧙✨\n\nLet's enter the following command!"
    )
    help()
  }
}

// TODO: memoのmdファイルを取得、無ければ作成
// const filePath = './README.md'
// fs.readFile(filePath, { encoding: 'utf8' }, (err, file) => {
//   if (err) {
//     console.log('[Error]', err.message)
//     process.exit(1)
//   }

//   // Markdownをhtmlに変換
//   const html = marked(file)
//   console.log('[Sucess]', html)
// })
