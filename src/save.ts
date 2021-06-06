import os from 'os'
import { exec } from 'child_process'

const TARGET_DIR = os.homedir() + '/wand/'

export const save = async () => {
  console.log('save')
  exec(`git --git-dir=${TARGET_DIR}.git --work-tree=${TARGET_DIR} add .`)
  exec(
    `git --git-dir=${TARGET_DIR}.git --work-tree=${TARGET_DIR} commit --allow-empty-message -m ""`
  )
  exec(
    `git --git-dir=${TARGET_DIR}.git --work-tree=${TARGET_DIR} push -u origin main`,
    (err, stdout) => {
      if (err) throw new Error(err.toString())
      console.log(stdout)
    }
  )
}
