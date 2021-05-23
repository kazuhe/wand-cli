import fs from 'fs'
import os from 'os'
import marked from 'marked'
import getRepository from './modules/get_repository'
import { question } from './modules/helper_readline'

const TARGET_DIR = os.homedir() + '/wand-cli/'

// If the repository does not exist in the user's home directory
if (!fs.existsSync(TARGET_DIR)) {
  question('リポジトリのURLを入力してください > ').then((repo) => {
    getRepository(repo, TARGET_DIR)

    // TODO: memoのmdファイルを取得、無ければ作成
    const filePath = './README.md'
    fs.readFile(filePath, { encoding: 'utf8' }, (err, file) => {
      if (err) {
        console.log('[Error]', err.message)
        process.exit(1)
      }

      // Markdownをhtmlに変換
      const html = marked(file)
      console.log('[Sucess]', html)
    })
  })
} else {
  console.log('The repository already exist!')
}

// import program from 'commander'
// // コマンドライン引数を取得し扱い易い形式にパース
// program.parse(process.argv)
// const filePath = program.args[0]
// console.log(process.argv)
// console.log(filePath)
