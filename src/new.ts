import os from 'os'
import fs from 'fs'
import { customAlphabet } from 'nanoid'
import chalk from 'chalk'
import { question } from './modules/helper_readline'

const TARGET_DIR = os.homedir() + '/wand/'

/**
 * Create new memo
 */
export const newMemo = async () => {
  const nanoid = customAlphabet('1234567890abcdefghijklmnopqestuvwxyz', 10)
  const uniqueString = nanoid()

  const fileName = await question(chalk.green('? ') + 'memo name', uniqueString)

  try {
    // 「flag: 'wx'」= Throw an error if the file already exists.
    fs.writeFileSync(`${TARGET_DIR}${fileName}.md`, '', { flag: 'wx' })
    console.log(
      chalk.green('\nsuccess: ') + `"${fileName}.md"が作成されました\n`
    )
  } catch (err) {
    console.log(
      chalk.red('\nfailure: ') + `"${fileName}.md"は既に存在しています\n${err}`
    )
  }
}
