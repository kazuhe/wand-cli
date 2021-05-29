import os from 'os'
import fs from 'fs'
import { customAlphabet } from 'nanoid'
import chalk from 'chalk'
import { question } from './modules/helper_readline'

const TARGET_DIR = os.homedir() + '/wand/'

export const newMemo = async () => {
  const nanoid = customAlphabet('1234567890abcdefghijklmnopqestuvwxyz', 10)
  const id = await nanoid()
  console.log(id)

  question(chalk.green('? ') + 'Memo name', id)
    .then((name) => {
      // TODO: 既に存在しているファイル名が入力された場合は再度質問
      const fileWriteStream = fs.createWriteStream(`${TARGET_DIR}/${name}.md`)
      fileWriteStream.end()
      return name
    })
    .then((name) =>
      console.log(chalk.green('\nsuccess') + ` 📄 ${name} created!`)
    )
  // TODO: エラー処理
}
