
import Head from 'next/head'
import { getManifest } from "../../lib/api"
import LayoutDocs from '../../components/layoutDocs'
import Sidebar from '../../components/sidebar'

export default function Index({ routes }) {

    return (
        <>
            <Head>
                <title>{`${routes.title.title}`}</title>
                <meta name="description" />
            </Head>
            <h1> {routes.title.title} </h1>


        </>
    )
}

Index.getLayout = function getLayout(page) {
    return (
      <LayoutDocs>
        <Sidebar routes= {page.props.routes} />
        {page}
      </LayoutDocs> 
    );
  };

export async function getStaticProps() {
    const manifest = getManifest()
    const routes = { title: manifest.routes[0] }
    return {
        props: {
            routes: { ...routes }
        }

    }
}


