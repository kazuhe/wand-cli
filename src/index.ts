import os from 'os'
import help from './help'

/**
 * Read command arguments and execute if they exist.
 */

const WAND_HOME_DIR = os.homedir() + '/wand'
const arg = process.argv[2]

const commandExecutor = async (path: string, arg?: string | number) => {
  return await import(path).then((result) => result.default(arg))
}

const commands: { [command: string]: () => Promise<void> } = {
  '--help': async () => await commandExecutor('./help'),
  '-h': async () => await commandExecutor('./help'),
  init: async () => await commandExecutor('./init', WAND_HOME_DIR),
  new: async () => await commandExecutor('./new', WAND_HOME_DIR),
  list: async () => await commandExecutor('./list', WAND_HOME_DIR),
  save: async () => await commandExecutor('./save', WAND_HOME_DIR),
}

// TODO: newはinit処理が完了している場合のみ実行させる

if (!commands[arg]) {
  console.log('\n🙅‍♂️ 存在しないコマンドです')
  help()
  process.exit(1)
}

commands[arg]()
