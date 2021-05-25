import program from 'commander'
import chalk from 'chalk'

type Commands = { [command: string]: () => Promise<() => void> }

/**
 * Read command options and execute if they exist.
 */
program.option('init', 'Register and set up the repository')
program.parse(process.argv)
const option = program.args[0]

const commands: Commands = {
  init: async () => await import('./init').then((result) => result.init),
}

if (!commands[option]) {
  console.log(chalk.red('💥 Corresponding command does not exist.'))
  process.exit(1)
}

commands[option]().then((result) => result())
