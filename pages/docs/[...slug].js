import LayoutDocs from '../../components/layoutDocs'
import Sidebar from '../../components/sidebar'
import DocBody from '../../components/doc-body'
import { getAllDocPaths, getDocBySlug, getManifest, getNextPrev } from "../../lib/api"
import markdownToHtml from '../../lib/markdownToHtml'
import PreviousNext from '../../components/previous-next'

export default function Docs({ data }) {
  console.log(data.doc.content)
  return (
    <section>
      <div>
        <DocBody content={data.content} />

        <PreviousNext prevNext={data.nextPrev} />

      </div>
    </section>
  )
}

export async function getStaticProps({ params }) {
  //Pass the array slug and get the content of the file
  //eg pass ['products', 'lenscribe.md'] get the content of the 
  //the file /docs/products/lenscribe.md
  const doc = getDocBySlug(params.slug)
  const nextPrev = getNextPrev(params.slug)
  //Refer LUMP or LUMP BETA. This is copied from there
  const content = await markdownToHtml(doc.content || '')
  console.log('content from staticProps', content)
  const manifest = getManifest()
  //Routes are sent to the sidebar component to build the navigation
  const routes = { title: manifest.routes[0] }
  const data = { doc: doc, content: content, nextPrev: nextPrev, routes: routes }
  //const doc = { slug: params.slug[0] }
  return {
    props: {
      //   doc: { ...doc, content, routes, nextPrev }
      data
    },
  }
}
export async function getStaticPaths() {
  const allDocPaths = getAllDocPaths()

  return {
    paths: allDocPaths.map((docPath) => {
      return {
        params: {
          //The Slug only accept an array of paths as the slug is 
          //defined as [...slug].js. Eg a path /products/lenscrbe should 
          //be sent as ['products','lenscribe'] to the slug
          slug: splitPaths(docPath),
        },
      }
    }),
    fallback: false,
  }
}

export function splitPaths(path) {
  const parts = path.split('/')

  let part1 = parts.shift()
  part1 = parts.shift()
  return parts
}

Docs.getLayout = function getLayout(page) {
  return (
    <LayoutDocs>
      <Sidebar routes={page.props.data.routes} />
      {page}
    </LayoutDocs>
  );
};
