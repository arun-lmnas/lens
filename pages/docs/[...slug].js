import { getAllDocPaths } from "../../lib/api"
import {useRouter} from 'next/router'

export default function Docs({doc}) {
return (
  <>
  <div>doc: {doc.slug}</div>
  </>
)
}

export async function getStaticProps({params}) {
  const doc = {slug: params.slug[0]}
  return {
    props: {
     doc:{...doc}
    },
  }
}
export async function getStaticPaths() {
  const allDocPaths = getAllDocPaths()

  return{ paths: allDocPaths.map((docPath) => {
    return {
      params: {
        slug: splitPaths(docPath) ,
      },
    }
  }),
  fallback: false,
}
}
/*
  const path1 = '/docs/README.md'
  const path2 = '/docs/products/lenscribe.md'
  return {
    paths: [
      { params: { slug: splitPaths(path1) } },
      { params: { slug: splitPaths(path2) } }
    ],
    fallback: false
  }
} */
export function splitPaths ( path) {
  const parts =  path.split('/')

  let part1 = parts.shift()
  part1 = parts.shift()
  return parts
}

