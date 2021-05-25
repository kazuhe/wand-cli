import { exec } from 'child_process'
import chalk from 'chalk'

export default (name: string, target: string) => {
  console.log(chalk.dim('cloning...'))

  exec(`git clone ${name} ${target}`, (error) => {
    if (error) {
      console.error(chalk.red('failed') + ' Repository clone failed')
      throw new Error(error.toString())
    }

    console.log(chalk.green('success') + ` 🎉 Clone repository! ${name}`)
  })
}
