import { exec } from 'child_process'

type Callback = (err: Error | null, result: string) => void | null

export default (name: string, callback: Callback) => {
  // TODO: 特定のファイル（.git等）が存在する場合は早期リターン
  exec(`git clone ${name}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`[exec error]: ${error}`)
      callback(error, 'リポジトリのcloneに失敗しました')
      return
    }
    callback(null, 'リポジトリのcloneに成功しました')
    console.log(`[stdout]: ${stdout}`)
    console.error(`[stderr]: ${stderr}`)
  })
}
