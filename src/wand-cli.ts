import fs from 'fs'
import readline from 'readline'
import marked from 'marked'
import getRepository from './modules/get_repository'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question('リポジトリのURLを入力してください > ', (name: string) => {
  console.log('cloneしています...')
  getRepository(name, (err, result) => {
    if (err) {
      console.log(result)
      return
    }

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

  rl.close()
})

// import program from 'commander'
// // コマンドライン引数を取得し扱い易い形式にパース
// program.parse(process.argv)
// const filePath = program.args[0]
// console.log(process.argv)
// console.log(filePath)
