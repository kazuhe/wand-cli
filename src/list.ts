import fs from 'fs'
import path from 'path'
import chalk from 'chalk'

const showFiles = async (dirpath: string) => {
  fs.readdir(dirpath, { withFileTypes: true }, (err, dirents) => {
    if (err) throw new Error(err.toString())

    for (const dirent of dirents) {
      const fp = path.join(dirpath, dirent.name)

      if (dirent.isDirectory()) {
        showFiles(fp)
      } else if (/.*\.md$/.test(fp)) {
        console.log(chalk.blue(dirent.name) + chalk.dim(`(${fp})`))
      }
    }
  })
}

export default async (dirpath: string) => {
  showFiles(dirpath)
}
