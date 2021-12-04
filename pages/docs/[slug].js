import { promises as fs } from 'fs'
import path from 'path'

export default function Docs({doc}) {
  console.log(doc)
return (
  <>
  <div>doc: {doc.slug}</div>
  </>
)
}

export async function getStaticProps({params}) {
  const doc = {slug: params.slug}
  return {
    props: {
     doc:{...doc}
    },
  }
}
export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: '1' } },
      { params: { slug: '2' } }
    ],
    fallback: false
  }
}


