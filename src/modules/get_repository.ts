import { exec } from 'child_process'
import colors from 'colors'

export default (name: string, target: string) => {
  console.log(colors.dim('Cloning...'))

  exec(`git clone ${name} ${target}`, (error) => {
    if (error) {
      console.error(colors.bgRed.black('Failed') + ' Repository clone failed')
      throw new Error(error.toString())
    }

    console.error(
      colors.bgGreen.black('Success') + ` 🎉 Clone repository! ${name}`
    )
  })
}
