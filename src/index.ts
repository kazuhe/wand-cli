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
  new: async () => await import('./new').then((result) => result.newMemo),
  list: async () => await import('./list').then((result) => result.list),
}

// TODO: newはinit処理が完了している場合のみ実行させる

if (!commands[arg]) {
  console.log(chalk.red('\n💥 Corresponding command does not exist.'))
  console.log(chalk.dim('\nTry typing --help, -h\n'))
  process.exit(1)
}

commands[arg]().then((result) => result())
