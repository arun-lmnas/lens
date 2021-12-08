import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { func } from 'prop-types'
import { Console } from 'console'

const docsDirectory = join(process.cwd(), 'docs')
function getFileMatter(file) {
  const fullPath = join(docsDirectory, `${file}`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  return {
    data: data,
    content: content
  }
}

export function getManifest() {
  /* const fullPath = join(docsDirectory, `manifest.json`)
   const fileContents = fs.readFileSync(fullPath, 'utf8')
   const { data, content } = matter(fileContents) */
  const matter = getFileMatter('manifest.json')
  return (JSON.parse(matter.content))
}
export function getAllDocPaths(manifest) {
  if (!manifest) { manifest = getManifest() }

  var paths = []
  const allDocPaths = getPathFromRoute(manifest.routes, paths)
  return allDocPaths

}
export function getDocBySlug(slug) {
  const path = slug.join('/')
  return getFileMatter(path)
}
export function getNextPrev(slug) {
  const allDocPaths = getAllDocPaths()

  slug.unshift('/docs')
  const path = slug.join('/')
  const currentIndex = allDocPaths.indexOf(path);
  return {
    
    prev: currentIndex > 0 ? {
      path: allDocPaths[currentIndex - 1],
      title: ((allDocPaths[currentIndex - 1]).split('/')).pop()
    }: '',
    next: currentIndex == (allDocPaths.length-1) ? '':{
      path: allDocPaths[currentIndex + 1],
      title: ((allDocPaths[currentIndex + 1]).split('/')).pop()
    },


  }
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