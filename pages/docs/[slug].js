import { getManifest } from "../../lib/api"

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
  const manifest = getManifest()
  console.log('Manifest from getStaticPaths', manifest)
  return {
    paths: [
      { params: { slug: 'readme.md' } },
      { params: { slug: 'products/lenscribe.md' } }
    ],
    fallback: false
  }
}


