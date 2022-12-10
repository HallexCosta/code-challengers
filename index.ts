import { readdir, rename } from 'node:fs/promises'

async function main() {
  const fileNames = await readdir('./leet-code')

  for (const fileName of fileNames) {
    const fileNameRenamed = fileName
      .replace(/\.\s/, '-')
      .replace(/\s/g, '-')
      .toLowerCase()

    const old_filename = `./leet-code/${fileName}`
    const new_filename = `./leet-code/${fileNameRenamed}`
    console.log(old_filename)
    console.log(new_filename)

    await rename(old_filename, new_filename)
  }
}
main()
