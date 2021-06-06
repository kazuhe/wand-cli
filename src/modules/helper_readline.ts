import readline from 'readline'
import chalk from 'chalk'

/**
 * Ask questions on the command line
 */
export const question = (
  question: string,
  initialValue?: string
): Promise<string> => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  const initV = initialValue ? chalk.dim(`(${initialValue}) `) : ''
  return new Promise((resolve) => {
    // TODO: 空の文字列の場合の処理
    rl.question(`${question}: ${initV}`, (answer) => {
      answer ? resolve(answer) : resolve(initialValue || answer)
      rl.close()
    })
  })
}

/**
 * Ask questions that can be answered with Yes / No
 */
export const confirm = async (msg: string): Promise<boolean> => {
  const answer = await question(`${msg}(y/n): `)
  return answer.trim().toLowerCase() === 'y'
}
