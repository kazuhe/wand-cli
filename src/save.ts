import child_process from 'child_process'
import util from 'util'
import chalk from 'chalk'

export default async (dirpath: string) => {
  const exec = util.promisify(child_process.exec)
  const gitOptions = `--git-dir=${dirpath}/.git --work-tree=${dirpath}`

  exec(`git ${gitOptions} add .`)
    .then(() => exec(`git ${gitOptions} commit -m "commit"`))
    .then(() =>
      exec(`git ${gitOptions} push -u origin main`).then(() =>
        console.log(
          chalk.green('\nsuccess: ') +
            `🎉 リモートリポジトリへの保存に成功しました🧙✨\n`
        )
      )
    )
    .catch((err) => {
      console.error(
        chalk.red('\nfailure: ') +
          '🙅‍♂️ リモートリポジトリへの保存に失敗しました\n'
      )
      throw new Error(err.toString())
    })
}
