
import Head from 'next/head'
import { getManifest } from "../../lib/api"
import Sidebar from '../../components/sidebar'

export default function Index({ routes }) {

    return (
        <>
            <Head>
                <title>{`${routes.title.title}`}</title>
                <meta name="description" />
            </Head>
            <h1> {routes.title.title} </h1>

            <div className="lg:container">
                <div className="md:flex max-w-7xl mx-auto">
                    <Sidebar routes={routes} />
                </div>
            </div>
        </>
    )
}

export async function getStaticProps() {
    const manifest = getManifest()
    const routes = { title: manifest.routes[0] }
    return {
        props: {
            routes: { ...routes }
        }

    }
}

