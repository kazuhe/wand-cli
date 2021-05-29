const message = `
COMMANDS:
  wand init         Set up the repository and start Wand CLI.
  wand new          Create a new memo.
  wand --help, -h   Show help
`

export const help = () => {
  console.log(message)
  process.exit(0)
}