import chalk from 'chalk'

/**
 * Read command arguments and execute if they exist.
 */

const arg = process.argv[2]

type Commands = { [command: string]: () => Promise<() => void> }
const commands: Commands = {
  '--help': async () => await import('./help').then((result) => result.help),
  '-h': async () => await import('./help').then((result) => result.help),
  init: async () => await import('./init').then((result) => result.init),
}

if (!commands[arg]) {
  console.log(chalk.red('💥 Corresponding command does not exist.'))
  process.exit(1)
}

commands[arg]().then((result) => result())
