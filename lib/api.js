import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { func } from 'prop-types'

const docsDirectory = join(process.cwd(), 'docs')

export function getManifest() {
  const fullPath = join(docsDirectory, `manifest.json`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  return (JSON.parse(content))
}
export function getAllDocPaths() {
  const manifest = getManifest()
  var paths = []
  const allDocPaths = getPathFromRoute(manifest.routes, paths)
  return allDocPaths

}

export function getPathFromRoute(routes, paths = []) {
  if (routes) {   
    routes.map((r) => {
      if (!r.path) {
        getPathFromRoute(r.routes, paths)
      } else {
        paths.push(r.path)   
      }
    })
  }
  return paths
}