import { exec } from 'child_process'

export const save = async () => {
  console.log('save')
  exec('git add .')
  exec('git commit --allow-empty-message -m ""')
  exec('git push origin main', (err, stdout) => {
    if (err) throw new Error(err.toString())
    console.log(stdout)
  })
}
