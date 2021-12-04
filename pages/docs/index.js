import { async } from "destack"
import { getManifest } from "../../lib/api"

export default function Index({doc}) {
    return (
        <h1> {doc.title} </h1>
    )
}

export async function getStaticProps() {
    const manifest = getManifest()
    const doc = {title: manifest.routes[0].title }
    return {
        props: {
            doc: {...doc}
        }

    }
}
    
