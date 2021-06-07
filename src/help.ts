const message = `
COMMANDS:
  wand init         Set up the repository and start Wand CLI.
  wand new          Create a new memo.
  wand list         Show the memo list.
  wand save         Save your changes and apply them to the remote repository.
  wand --help, -h   Show help.
`

export default async () => {
  console.log(message)
  process.exit(0)
}
