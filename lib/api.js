import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
//Join the current working directory with docs folder
const docsDirectory = join(process.cwd(), 'docs')
///Get the file contents of Markdown into data and content. ///
function getFileMatter(file) {
  //Get the full path of the file
  const fullPath = join(docsDirectory, `${file}`)
  //Read the file contents from the file
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  //Split the file matter into data and contents
  const { data, content } = matter(fileContents)
  return {
    data: data,
    content: content
  }
}
//Get the Manifest data from /docs/manifest.json
export function getManifest() {
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