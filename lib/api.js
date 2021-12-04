import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const docsDirectory = join(process.cwd(), 'docs')

export function getManifest() {
  const fullPath = join(docsDirectory, `manifest.json`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  return (content )
}