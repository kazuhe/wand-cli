import readline from 'readline'
import colors from 'colors'

/**
 * Ask questions on the command line
 */
export const question = (question: string): Promise<string> => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  return new Promise((resolve) => {
    rl.question('\n' + colors.dim(question), (answer) => {
      resolve(answer)
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
